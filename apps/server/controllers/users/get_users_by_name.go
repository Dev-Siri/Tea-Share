package user_controllers

import (
	"database/sql"
	"encoding/json"
	"tea-share/db"
	"tea-share/models"
	"tea-share/utils"

	"github.com/valyala/fasthttp"
)

func GetUsersByName(ctx *fasthttp.RequestCtx) {
	searchParams := ctx.QueryArgs()

	name := string(searchParams.Peek("name"))
	exact := searchParams.GetBool("exact")

	var usersFetchError error
	var fetchedRows *sql.Rows

	if exact {
		rows, err := db.Database.Query(`
			SELECT user_id, username, user_image, email FROM Users
			WHERE username = ?
		;`, name)

		usersFetchError = err
		fetchedRows = rows
	} else {
		page, limit := utils.GetPaginationParams(searchParams)
		wildcardQuery := "%" + name + "%"

		rows, err := db.Database.Query(`
			SELECT user_id, username, user_image, email FROM Users
			WHERE username LIKE ?
			LIMIT ? OFFSET ?
		;`, wildcardQuery, limit, page)

		usersFetchError = err
		fetchedRows = rows
	}

	if usersFetchError != nil {
		ctx.Error("Failed to search for users", fasthttp.StatusInternalServerError)
		return
	}

	defer fetchedRows.Close()

	var users []models.User

	for fetchedRows.Next() {
		var user models.User

		if postDecodeError := fetchedRows.Scan(
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

	ctx.SetContentType("application/json")
	ctx.Write(userJSONBytes)
}
