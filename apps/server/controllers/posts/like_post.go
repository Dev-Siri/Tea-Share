package post_controllers

import (
	"tea-share/db"

	"github.com/google/uuid"
	"github.com/valyala/fasthttp"
)

func LikePost(ctx *fasthttp.RequestCtx) {
	postId := ctx.UserValue("id")
	userId := string(ctx.QueryArgs().Peek("userId"))

	var countOfExistingPostIds int

	row := db.Database.QueryRow(`
		SELECT COUNT(post_id) FROM Likes
		WHERE post_id = ?
	;`, postId)

	if postCountDecodeError := row.Scan(&countOfExistingPostIds); postCountDecodeError != nil {
		ctx.Error("Failed to check if post is already liked", fasthttp.StatusInternalServerError)
		return
	}

	if countOfExistingPostIds != 0 {
		ctx.Error("Already liked", fasthttp.StatusForbidden)
		return
	}

	db.Database.Query(`
		INSERT INTO Likes(like_id, user_id, post_id)
		VALUES ( ?, ?, ? )
	;`, uuid.NewString(), userId, postId)

	ctx.SetStatusCode(fasthttp.StatusNoContent)
}
