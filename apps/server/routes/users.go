package routes

import (
	user_controllers "tea-share/controllers/users"

	"github.com/buaazp/fasthttprouter"
)

func RegisterUserRoutes(router *fasthttprouter.Router) {
	go router.GET("/users", user_controllers.GetUsers)
	go router.PUT("/users", user_controllers.UpdateUser)

	// go server.HandleFunc("/users/search", func(w http.ResponseWriter, r *http.Request) {
	// 	if r.Method == http.MethodGet {
	// 		user_controllers.GetUsersByName(w, r)
	// 	} else {
	// 		error_handlers.MethodNotAllowed(w, r)
	// 	}
	// })
}
