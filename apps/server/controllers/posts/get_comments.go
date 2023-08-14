package post_controllers

import (
	"encoding/json"
	"tea-share/db"
	"tea-share/models"

	"github.com/valyala/fasthttp"
)

func GetComments(ctx *fasthttp.RequestCtx) {
	postId := ctx.UserValue("id")

	rows, dbQueryError := db.Database.Query(`
		SELECT u.username, u.user_image, c.created_at, c.comment
		FROM Comments c
		LEFT JOIN Users u ON u.user_id = c.user_id
		WHERE c.post_id = ?
		ORDER BY c.created_at ASC
	`, postId)

	if dbQueryError != nil {
		ctx.Error("Failed to get comments", fasthttp.StatusInternalServerError)
		return
	}

	defer rows.Close()

	var comments []models.Comment

	for rows.Next() {
		var comment models.Comment

		if postDecodeError := rows.Scan(
			&comment.Username,
			&comment.UserImage,
			&comment.CreatedAt,
			&comment.Comment,
		); postDecodeError != nil {
			ctx.Error("Failed to decode posts", fasthttp.StatusInternalServerError)
			return
		}

		comments = append(comments, comment)
	}

	commentJSONBytes := []byte("[]")
	
	if len(comments) > 0 {
		commentsBytes, jsonError := json.Marshal(comments)

		if jsonError != nil {
			ctx.Error("Failed to encode posts as JSON", fasthttp.StatusInternalServerError)
			return
		}

		commentJSONBytes = commentsBytes;
	}

	ctx.SetContentType("application/json")
	ctx.Write(commentJSONBytes)
}