package error_handlers

import (
	"net/http"
	"tea-share/env"
)

func MethodNotAllowed(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", env.CorsOrigin)

	http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
}
