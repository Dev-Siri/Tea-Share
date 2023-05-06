package routes

import (
	"net/http"
	error_handlers "tea-share/controllers/errors"
	post_controllers "tea-share/controllers/posts"
)

func RegisterPostRoutes() {
	http.HandleFunc("/posts", func(w http.ResponseWriter, r *http.Request) {
		switch r.Method {
		case http.MethodGet:
			post_controllers.GetPosts(w, r)
		case http.MethodPost:
			post_controllers.CreatePost(w, r)
		default:
			error_handlers.MethodNotAllowed(w, r)
		}
	})
}
