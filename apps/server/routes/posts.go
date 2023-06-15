package routes

import (
	post_controllers "tea-share/controllers/posts"

	"github.com/buaazp/fasthttprouter"
)

func RegisterPostRoutes(router *fasthttprouter.Router) {
	go router.GET("/posts", post_controllers.GetPosts)
	go router.GET("/posts/search", post_controllers.GetPostsBySearchTerm)
	go router.POST("/posts", post_controllers.CreatePost)
	go router.PATCH("/posts/:id/like", post_controllers.LikePost)
}
