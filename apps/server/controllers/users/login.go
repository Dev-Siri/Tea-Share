package user_controllers

import (
	"encoding/json"
	"tea-share/db"
	"tea-share/env"
	"tea-share/hash"
	"tea-share/models"
	response_models "tea-share/models/responses"
	"tea-share/utils"

	"github.com/dgrijalva/jwt-go"
	"github.com/valyala/fasthttp"
)

func Login(ctx *fasthttp.RequestCtx) {
	var user models.User

	if bodyDecodeError := json.Unmarshal(ctx.PostBody(), &user); bodyDecodeError != nil {
		ctx.Error("Failed to decode user credentials", fasthttp.StatusBadRequest)
		return
	}

	if !utils.IsValidEmail(user.Email) || user.Password == "" {
		ctx.Error("Email or Password are either invalid or empty", fasthttp.StatusBadRequest)
		return
	}

	var numberOfExistingAccounts int

	countRow := db.Database.QueryRow(`
		SELECT COUNT(email) FROM Users
		WHERE email = ?
	;`, user.Email)

	if rowCountScanError := countRow.Scan(&numberOfExistingAccounts); rowCountScanError != nil {
		ctx.Error("Failed to check if your account exists", fasthttp.StatusInternalServerError)
		return
	}

	if numberOfExistingAccounts == 0 {
		ctx.Error("User doesn't exist", fasthttp.StatusNotFound)
		return
	}

	row := db.Database.QueryRow(`
		SELECT user_id, username, user_image, email, password, salt FROM Users
		WHERE email = ?
	;`, user.Email)

	var dbUser models.User

	if dbUserScanError := row.Scan(
		&dbUser.UserID,
		&dbUser.Username,
		&dbUser.UserImage,
		&dbUser.Email,
		&dbUser.Password,
		&dbUser.Salt,
	); dbUserScanError != nil {
		ctx.Error("Failed to scan your info", fasthttp.StatusInternalServerError)
		return
	}

	match := hash.Scrpyt().FirebaseVerify(user.Password, dbUser.Salt, dbUser.Password)

	if !match {
		ctx.Error("Password is incorrect", fasthttp.StatusBadRequest)
		return
	}

	token := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
		"userId":    dbUser.UserID,
		"username":  dbUser.Username,
		"userImage": dbUser.UserImage,
		"email":     dbUser.Email,
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
	ctx.Write(jsonResponse)
}
