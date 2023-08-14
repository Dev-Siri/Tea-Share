package post_controllers

import (
	"database/sql"
	"encoding/json"
	"tea-share/db"
	"tea-share/models"
	"tea-share/utils"
	"time"

	"github.com/google/uuid"
	"github.com/valyala/fasthttp"
)

func CreateComment(ctx *fasthttp.RequestCtx) {
	postId := ctx.UserValue("id")
	userId := string(ctx.QueryArgs().Peek("userId"))

	var comment models.Comment

	if bodyDecodeError := json.Unmarshal(ctx.PostBody(), &comment); bodyDecodeError != nil {
		ctx.Error("Failed to read comment contents", fasthttp.StatusBadRequest)
		return
	}

	row := db.Database.QueryRow(`
		SELECT COUNT(*) FROM Posts
		WHERE post_id = ?
	;`, postId)

	var postsWithId int

	if rowsDecodeError := row.Scan(&postsWithId); rowsDecodeError != nil {
		if rowsDecodeError == sql.ErrNoRows {
			ctx.Error("Post does not exist", fasthttp.StatusNotFound)
			return
		}

		ctx.Error("Failed to check if post exists", fasthttp.StatusInternalServerError)
		return
	}

	if postsWithId == 0 {
		ctx.Error("Post does not exist", fasthttp.StatusNotFound)
		return
	}

	isValid, message := utils.IsValidUserID(userId)

	if !isValid {
		ctx.Error(message, fasthttp.StatusBadRequest)
		return
	}

	if comment.Comment == "" {
		ctx.Error("Comment is empty", fasthttp.StatusBadRequest)
		return
	}

	_, dbInsertError := db.Database.Query(`
		INSERT INTO Comments(comment_id, post_id, user_id, created_at, comment)
		VALUES ( ?, ?, ?, ?, ? )
	;`, uuid.NewString(), postId, userId, time.Now().UTC(), comment.Comment)

	if dbInsertError != nil {
		ctx.Error("Failed to create comment", fasthttp.StatusInternalServerError)
		return
	}

	ctx.SetStatusCode(fasthttp.StatusCreated)
	ctx.WriteString("Comment created successfully")
}
