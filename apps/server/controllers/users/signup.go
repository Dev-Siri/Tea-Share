package user_controllers

import (
	"crypto/rand"
	"encoding/base64"
	"encoding/json"
	"tea-share/db"
	"tea-share/env"
	"tea-share/hash"
	"tea-share/models"
	response_models "tea-share/models/responses"
	"tea-share/utils"

	"github.com/dgrijalva/jwt-go"
	"github.com/google/uuid"
	"github.com/valyala/fasthttp"
)

func Signup(ctx *fasthttp.RequestCtx) {
	var user models.User

	if bodyDecodeError := json.Unmarshal(ctx.PostBody(), &user); bodyDecodeError != nil {
		ctx.Error("Failed to decode user credentials", fasthttp.StatusBadRequest)
		return
	}

	authProvider := "mail"

	if user.AuthProvider == "google" {
		authProvider = "google"
	}

	if user.Username == "" || user.UserImage == "" || !utils.IsValidEmail(user.Email) || (authProvider != "google" && user.Password == "") {
		ctx.Error("Username, Email, Image or Password are either empty or Email is invalid", fasthttp.StatusBadRequest)
		return
	}

	if len(user.Username) < 3 {
		ctx.Error("Username must be atleast 3 characters long", fasthttp.StatusBadRequest)
		return
	}

	if len(user.Username) > 100 {
		ctx.Error("Username too long", fasthttp.StatusBadRequest)
		return
	}

	if len(user.Email) > 255 {
		ctx.Error("Email too long", fasthttp.StatusBadRequest)
		return
	}

	var numberOfExistingAccounts int

	countRow := db.Database.QueryRow(`
		SELECT COUNT(email) FROM Users
		WHERE email = ?
	;`, user.Email)

	if rowCountScanError := countRow.Scan(&numberOfExistingAccounts); rowCountScanError != nil {
		ctx.Error("Failed to check if your already account exists", fasthttp.StatusInternalServerError)
		return
	}

	if numberOfExistingAccounts != 0 {
		if authProvider == "google" {
			signInWithGoogle(ctx, user.Email)
			return
		}

		ctx.Error("Account already exists", fasthttp.StatusForbidden)
		return
	}

	var dbError error
	imageUrl := user.UserImage
	userId := uuid.NewString()

	if authProvider == "mail" {
		salt := make([]byte, 16)
		_, saltGenerateError := rand.Read(salt)

		if saltGenerateError != nil {
			ctx.Error("Failed to generate a secure salt for your account", fasthttp.StatusInternalServerError)
			return
		}

		hashedPassword, passwordHashError := hash.Scrpyt().EncodeToString([]byte(user.Password), salt)

		if passwordHashError != nil {
			ctx.Error("Failed to hash your password", fasthttp.StatusInternalServerError)
			return
		}

		encodedSalt := base64.StdEncoding.EncodeToString(salt)

		uploadedImageUrl, imageUploadError := db.UploadDataURL(
			user.UserImage,
			"users/"+uuid.NewString(),
		)

		if imageUploadError != nil {
			ctx.Error("Failed to upload your profile image", fasthttp.StatusInternalServerError)
			return
		}

		imageUrl = uploadedImageUrl

		_, dbInsertError := db.Database.Query(`
			INSERT INTO Users(user_id, username, user_image, email, password, salt, auth_provider)
			VALUES ( ?, ?, ?, ?, ?, ?, ? )
		;`, userId, user.Username, uploadedImageUrl, user.Email, hashedPassword, encodedSalt, authProvider)

		dbError = dbInsertError
	} else {
		_, dbInsertError := db.Database.Query(`
			INSERT INTO Users(user_id, username, user_image, email, auth_provider)
			VALUES ( ?, ?, ?, ?, ?, ?, ? )
		;`, userId, user.Username, user.UserImage, user.Email, authProvider)

		dbError = dbInsertError
	}

	if dbError != nil {
		ctx.Error("Failed to create your account", fasthttp.StatusInternalServerError)
		return
	}

	token := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
		"userId":    userId,
		"username":  user.Username,
		"userImage": imageUrl,
		"email":     user.Email,
	})

	authToken, tokenSignError := token.SignedString(env.GetJWTSecretKey())

	if tokenSignError != nil {
		ctx.Error("Failed to sign your auth token", fasthttp.StatusInternalServerError)
		return
	}

	response := response_models.AuthResponse{Token: authToken}
	jsonResponse, jsonMarshalError := json.Marshal(response)

	if jsonMarshalError != nil {
		ctx.Error("Failed to encode response as JSON", fasthttp.StatusInternalServerError)
		return
	}

	ctx.SetContentType("application/json")
	ctx.SetStatusCode(fasthttp.StatusCreated)
	ctx.Write(jsonResponse)
}

func signInWithGoogle(ctx *fasthttp.RequestCtx, email string) {
	row := db.Database.QueryRow(`
		SELECT user_id, username, user_image, email FROM Users
		WHERE email = ?
	;`, email)

	var dbUser models.User

	if dbUserScanError := row.Scan(
		&dbUser.UserID,
		&dbUser.Username,
		&dbUser.UserImage,
		&dbUser.Email,
	); dbUserScanError != nil {
		ctx.Error("Failed to scan your info", fasthttp.StatusInternalServerError)
		return
	}

	authResponse, authResponseError := utils.CreateUserJWTResponse(dbUser.UserID, dbUser.Username, dbUser.UserImage, dbUser.Email)

	if authResponseError != nil {
		ctx.Error("Failed to create your authentication token", fasthttp.StatusInternalServerError)
		return
	}

	ctx.SetContentType("application/json")
	ctx.Write(authResponse)
}
