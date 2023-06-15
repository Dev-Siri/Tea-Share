package post_controllers

import (
	"tea-share/db"

	"github.com/valyala/fasthttp"
)

func LikePost(ctx *fasthttp.RequestCtx) {
	db := db.SQL()

	postId := ctx.UserValue("id")
	userId := string(ctx.QueryArgs().Peek("userId"))

	var countOfExistingPostIds int

	row := db.QueryRow(`
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

	db.Query(`
		INSERT INTO Likes(user_id, post_id)
		VALUES ( ?, ? )
	;`, userId, postId)

	ctx.SetStatusCode(fasthttp.StatusNoContent)
}
