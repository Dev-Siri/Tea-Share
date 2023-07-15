package user_controllers

import (
	"encoding/json"
	"tea-share/db"
	"tea-share/hash"
	"tea-share/models"
	"tea-share/utils"

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

	authResponse, authResponseError := utils.CreateUserJWTResponse(dbUser.UserID, dbUser.Username, dbUser.UserImage, dbUser.Email)

	if authResponseError != nil {
		ctx.Error("Failed to create your authentication token", fasthttp.StatusInternalServerError)
		return
	}

	ctx.SetContentType("application/json")
	ctx.Write(authResponse)
}
