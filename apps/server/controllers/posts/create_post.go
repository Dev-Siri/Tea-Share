package post_controllers

import (
	"encoding/json"
	"tea-share/db"
	"tea-share/models"
	"tea-share/utils"
	"time"

	"github.com/google/uuid"
	"github.com/valyala/fasthttp"
)

func CreatePost(ctx *fasthttp.RequestCtx) {
	var post models.Post

	if bodyDecodeError := json.Unmarshal(ctx.PostBody(), &post); bodyDecodeError != nil {
		ctx.Error("Failed to read post contents", fasthttp.StatusBadRequest)
		return
	}

	isValid, message := utils.IsValidUserID(post.UserID)

	if !isValid {
		ctx.Error(message, fasthttp.StatusBadRequest)
		return
	}

	postImage := ""

	if post.PostImage != "" {
		uploadedImageUrl, imageUploadError := db.UploadDataURL(
			post.PostImage,
			"posts/"+uuid.NewString(),
		)

		if imageUploadError != nil {
			ctx.Error("Failed to upload post image", fasthttp.StatusInternalServerError)
			return
		}

		postImage = uploadedImageUrl
	}

	_, dbInsertError := db.Database.Query(`
		INSERT INTO Posts(post_id, caption, post_image, created_at, user_id)
		VALUES ( ?, ?, ?, ?, ? )
	;`, uuid.NewString(), post.Caption, utils.NewNullString(postImage), time.Now().UTC(), post.UserID)

	if dbInsertError != nil {
		ctx.Error("Failed to create post", fasthttp.StatusInternalServerError)
		return
	}

	ctx.SetStatusCode(fasthttp.StatusCreated)
	ctx.WriteString("Post created successfully")
}
