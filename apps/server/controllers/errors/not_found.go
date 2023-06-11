package error_handlers

import (
	"net/http"
	"tea-share/env"
)

func NotFound(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", env.CorsOrigin)

	http.Error(w, "Page not found", http.StatusNotFound)
}
