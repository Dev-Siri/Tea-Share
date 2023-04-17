package routes

import (
	"net/http"
	"tea-share/controllers"
)

func RegisterUserRoutes() {
	http.HandleFunc("/users", func(w http.ResponseWriter, r *http.Request) {
		switch r.Method {
			case http.MethodGet:
				controllers.GetUsers(w, r)
			case http.MethodPost:
				controllers.CreateUser(w, r)
			default:
				controllers.MethodNotAllowed(w, r)
		}
	})
}
