package post_controllers

import (
	"database/sql"
	"encoding/json"
	"tea-share/db"
	"tea-share/models"
	"tea-share/utils"

	"github.com/valyala/fasthttp"
)

func GetPosts(ctx *fasthttp.RequestCtx) {
	page, limit := utils.GetPaginationParams(ctx.QueryArgs())

	rows, postsFetchError := db.Database.Query(`
		SELECT
			p.*,
			u.username,
			u.user_image,
			COALESCE(
				(
					SELECT JSON_ARRAYAGG(
						JSON_OBJECT(
							'username', lu.username,
							'userImage', lu.user_image
						)
					)
					FROM Likes l
					LEFT JOIN Users lu ON lu.user_id = l.user_id
					WHERE l.post_id = p.post_id
				),
				JSON_ARRAY()
			) AS likes
		FROM Posts p
		LEFT JOIN Users u ON u.user_id = p.user_id
		GROUP BY p.post_id
		ORDER BY p.created_at DESC
		LIMIT ? OFFSET ?
	;`, limit, page)

	if postsFetchError != nil {
		ctx.Error("Failed to get posts", fasthttp.StatusInternalServerError)
		return
	}

	defer rows.Close()

	var posts []models.Post

	for rows.Next() {
		var post models.Post
		var postImage sql.NullString

		var likesJSON []uint8

		if postDecodeError := rows.Scan(
			&post.PostID,
			&postImage,
			&post.CreatedAt,
			&post.UserID,
			&post.Caption,
			&post.Username,
			&post.UserImage,
			&likesJSON,
		); postDecodeError != nil {
			ctx.Error("Failed to decode posts", fasthttp.StatusInternalServerError)
			return
		}

		post.PostImage = postImage.String

		likes, likesParseError := utils.ParseLikes(likesJSON)

		if likesParseError != nil {
			ctx.Error("Failed to decode likes", fasthttp.StatusInternalServerError)
			return
		}

		post.Likes = likes
		posts = append(posts, post)
	}

	postJSONBytes, jsonError := json.Marshal(posts)

	if jsonError != nil {
		ctx.Error("Failed to encode posts as JSON", fasthttp.StatusInternalServerError)
		return
	}

	ctx.SetContentType("application/json")
	ctx.Write(postJSONBytes)
}
