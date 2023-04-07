package routes

import (
	"net/http"
	"tea-share/controllers"
)

func RegisterPostRoutes() {
	http.HandleFunc("/posts", func(w http.ResponseWriter, r *http.Request) {
		switch r.Method {
		case http.MethodGet:
			controllers.GetPosts(w, r)
		case http.MethodPost:
			controllers.CreatePost(w, r)
		default:
			controllers.MethodNotAllowed(w, r)
		}
	})
}
