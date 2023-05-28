package routes

import (
	"net/http"
	error_handlers "tea-share/controllers/errors"
	user_controllers "tea-share/controllers/users"
)

func RegisterUserRoutes() {
	go http.HandleFunc("/users", func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", "https://tea-share.vercel.app")

		switch r.Method {
		case http.MethodGet:
			user_controllers.GetUsers(w, r)
		case http.MethodPost:
			user_controllers.CreateUser(w, r)
		case http.MethodPut:
			user_controllers.UpdateUser(w, r)
		default:
			error_handlers.MethodNotAllowed(w, r)
		}
	})

	go http.HandleFunc("/users/search", func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", "https://tea-share.vercel.app")

		if r.Method == http.MethodGet {
			user_controllers.GetUsersByName(w, r)
		} else {
			error_handlers.MethodNotAllowed(w, r)
		}
	})
}
