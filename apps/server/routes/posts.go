package routes

import (
	"net/http"
	error_handlers "tea-share/controllers/errors"
	post_controllers "tea-share/controllers/posts"
	"tea-share/env"
)

func RegisterPostRoutes() {
	go http.HandleFunc("/posts", func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", env.CorsOrigin)

		switch r.Method {
		case http.MethodGet:
			post_controllers.GetPosts(w, r)
		case http.MethodPost:
			post_controllers.CreatePost(w, r)
		default:
			error_handlers.MethodNotAllowed(w, r)
		}
	})

	go http.HandleFunc("/posts/search", func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", env.CorsOrigin)

		if r.Method == http.MethodGet {
			post_controllers.GetPostsBySearchTerm(w, r)
		} else {
			error_handlers.MethodNotAllowed(w, r)
		}
	})

	go http.HandleFunc("/posts/like", func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", env.CorsOrigin)

		if r.Method == http.MethodPatch {
			post_controllers.LikePost(w, r)
		} else {
			error_handlers.MethodNotAllowed(w, r)
		}
	})
}
