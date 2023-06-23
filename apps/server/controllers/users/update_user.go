package user_controllers

import (
	"encoding/json"
	"tea-share/db"
	"tea-share/models"

	"github.com/google/uuid"
	"github.com/valyala/fasthttp"
)

func UpdateUser(ctx *fasthttp.RequestCtx) {
	userId := ctx.UserValue("id")

	var updatedUser models.User

	if bodyReadError := json.Unmarshal(ctx.PostBody(), &updatedUser); bodyReadError != nil {
		ctx.Error("Failed to read updated user", fasthttp.StatusBadRequest)
		return
	}

	newUploadedImage, imageUploadError := db.UploadDataURL(
		updatedUser.UserImage,
		"users/"+uuid.NewString(),
	)

	if imageUploadError != nil {
		ctx.Error("Failed to upload new profile picture", fasthttp.StatusInternalServerError)
		return
	}

	_, dbUpdateError := db.Database.Query(`
		UPDATE Users
		SET username = ?,
			email = ?
		WHERE user_id = ?
	 ;`, updatedUser.Username, updatedUser.Email, newUploadedImage, userId)

	if dbUpdateError != nil {
		ctx.Error("Failed to update your profile", fasthttp.StatusInternalServerError)
		return
	}

	ctx.SetStatusCode(fasthttp.StatusNoContent)
}
