package error_handlers

import (
	"net/http"
)

func NotFound(w http.ResponseWriter, r *http.Request) {
	http.Error(w, "Page not found", http.StatusNotFound)
}
