package routes

import (
	user_controllers "tea-share/controllers/users"

	"github.com/fasthttp/router"
)

func RegisterUserRoutes(router *router.Router) {
	go router.GET("/users", user_controllers.GetUsers)
	go router.GET("/users/search", user_controllers.GetUsersByName)
	go router.POST("/users/signup", user_controllers.Signup)
	go router.POST("/users/login", user_controllers.Login)
	go router.PUT("/users/{id}/update", user_controllers.UpdateUser)
	// go router.PUT("/users/reset-password", user_controllers.ResetPassword)
}
