package routes

import (
	post_controllers "tea-share/controllers/posts"

	"github.com/fasthttp/router"
)

func RegisterPostRoutes(router *router.Router) {
	router.GET("/posts", post_controllers.GetPosts)
	router.GET("/posts/search", post_controllers.GetPostsBySearchTerm)
	router.POST("/posts", post_controllers.CreatePost)
	router.PATCH("/posts/{id}/like", post_controllers.LikePost)
}
