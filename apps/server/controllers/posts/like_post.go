package post_controllers

import (
	"tea-share/db"
	"tea-share/utils"

	"github.com/google/uuid"
	"github.com/valyala/fasthttp"
)

func LikePost(ctx *fasthttp.RequestCtx) {
	postId := ctx.UserValue("id")
	userId := string(ctx.QueryArgs().Peek("userId"))

	var countOfExistingUserIds int

	row := db.Database.QueryRow(`
		SELECT COUNT(user_id) FROM Likes
		WHERE post_id = ? AND user_id = userId
	;`, postId, userId)

	if postCountDecodeError := row.Scan(&countOfExistingUserIds); postCountDecodeError != nil {
		ctx.Error("Failed to check if post is already liked", fasthttp.StatusInternalServerError)
		return
	}

	if countOfExistingUserIds != 0 {
		ctx.Error("Already liked", fasthttp.StatusForbidden)
		return
	}

	isValid, message := utils.IsValidUserID(userId)

	if !isValid {
		ctx.Error(message, fasthttp.StatusBadRequest)
		return
	}

	db.Database.Query(`
		INSERT INTO Likes(like_id, user_id, post_id)
		VALUES ( ?, ?, ? )
	;`, uuid.NewString(), userId, postId)

	ctx.SetStatusCode(fasthttp.StatusNoContent)
}
