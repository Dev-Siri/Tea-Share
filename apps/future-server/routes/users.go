package routes

import (
	"net/http"
	error_handlers "tea-share/controllers/errors"
	user_controllers "tea-share/controllers/users"
)

func RegisterUserRoutes() {
	http.HandleFunc("/users", func(w http.ResponseWriter, r *http.Request) {
		switch r.Method {
		case http.MethodGet:
			user_controllers.GetUsers(w, r)
		case http.MethodPost:
			user_controllers.CreateUser(w, r)
		default:
			error_handlers.MethodNotAllowed(w, r)
		}
	})
}
