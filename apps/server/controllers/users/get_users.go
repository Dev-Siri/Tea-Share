package user_controllers

import (
	"encoding/json"
	"tea-share/db"
	"tea-share/models"

	"github.com/valyala/fasthttp"
)

func GetUsers(ctx *fasthttp.RequestCtx) {
	searchParams := ctx.QueryArgs()

	page := searchParams.GetUintOrZero("page")
	limit := searchParams.GetUintOrZero("limit")

	offset := (page - 1) * limit

	rows, usersFetchError := db.SQL().Query(`
		SELECT user_id,username, user_image, email FROM Users
		LIMIT ? OFFSET ?
	;`, limit, offset)

	if usersFetchError != nil {
		ctx.Error("Failed to get users", fasthttp.StatusInternalServerError)
		return
	}

	defer rows.Close()

	var users []models.User

	for rows.Next() {
		var user models.User

		if postDecodeError := rows.Scan(
			&user.UserID,
			&user.Username,
			&user.UserImage,
			&user.Email,
		); postDecodeError != nil {
			ctx.Error("Failed to decode users", fasthttp.StatusInternalServerError)
			return
		}

		users = append(users, user)
	}

	userJSONBytes, jsonError := json.Marshal(users)

	if jsonError != nil {
		ctx.Error("Failed to encode users as JSON", fasthttp.StatusInternalServerError)
		return
	}

	ctx.Response.Header.Set("Content-Type", "application/json")
	ctx.Write(userJSONBytes)
}
