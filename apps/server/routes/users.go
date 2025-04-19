package routes

import (
	user_controllers "tea-share/controllers/users"

	"github.com/fasthttp/router"
)

func RegisterUserRoutes(router *router.Router) {
	router.GET("/users", user_controllers.GetUsers)
	router.GET("/users/search", user_controllers.GetUsersByName)
	router.POST("/users/signup", user_controllers.Signup)
	router.POST("/users/login", user_controllers.Login)
	router.PUT("/users/{id}/update", user_controllers.UpdateUser)
	// router.PUT("/users/reset-password", user_controllers.ResetPassword)
}
