package error_handlers

import "net/http"

func NotFound(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "https://tea-share.vercel.app")

	http.Error(w, "Page not found", http.StatusNotFound)
}
