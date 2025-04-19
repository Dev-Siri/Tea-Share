package post_controllers

import (
	"encoding/json"
	"tea-share/db"
	"tea-share/models"
	response_models "tea-share/models/responses"
	"tea-share/utils"

	"github.com/valyala/fasthttp"
)

func GetComments(ctx *fasthttp.RequestCtx) {
	postId := ctx.UserValue("id")
	page, limit := utils.GetPaginationParams(ctx.QueryArgs())

	commentCountChan := make(chan int)
	commentsChan := make(chan []models.Comment)
	errorsChan := make(chan string, 2)

	go func() {
		defer close(commentCountChan)
		var commentCount int

		row := db.Database.QueryRow(`
			SELECT COUNT(*) FROM Comments
			WHERE post_id = ?
		;`, postId)

		if err := row.Scan(&commentCount); err != nil {
			errorsChan <- "Failed to get comments count"
			return
		}

		commentCountChan <- commentCount
	}()

	go func() {
		defer close(commentsChan)

		rows, dbQueryError := db.Database.Query(`
			SELECT u.username, u.user_image, c.created_at, c.comment
			FROM Comments c
			LEFT JOIN Users u ON u.user_id = c.user_id
			WHERE c.post_id = ?
			ORDER BY c.created_at ASC
			LIMIT ? OFFSET ?
		;`, postId, limit, page)

		if dbQueryError != nil {
			errorsChan <- "Failed to get comments"
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
				errorsChan <- "Failed to decode posts"
				return
			}

			comments = append([]models.Comment{comment}, comments...)
		}

		if len(comments) == 0 {
			comments = []models.Comment{}
		}

		commentsChan <- comments
	}()

	select {
	case err := <-errorsChan:
		ctx.Error(err, fasthttp.StatusInternalServerError)
		return
	default:
		response := response_models.CommentsResponse{
			Total:    <-commentCountChan,
			Comments: <-commentsChan,
		}

		commentsResponseBytes, jsonError := json.Marshal(response)

		if jsonError != nil {
			ctx.Error("Failed to encode posts as JSON", fasthttp.StatusInternalServerError)
			return
		}

		ctx.SetContentType("application/json")
		ctx.Write(commentsResponseBytes)
	}
}
