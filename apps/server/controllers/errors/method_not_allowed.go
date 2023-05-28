package error_handlers

import "net/http"

func MethodNotAllowed(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "https://tea-share.vercel.app")

	http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
}
