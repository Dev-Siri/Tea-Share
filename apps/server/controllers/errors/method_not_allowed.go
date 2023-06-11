package error_handlers

import (
	"net/http"
)

func MethodNotAllowed(w http.ResponseWriter, r *http.Request) {
	http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
}
