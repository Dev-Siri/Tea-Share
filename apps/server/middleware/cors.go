package middleware

import (
	"net/http"
	"tea-share/env"
)

func CorsMiddleware(handler http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", env.GetCorsOrigin())

		if r.Method == http.MethodOptions {
			w.Header().Set("Access-Control-Allow-Methods", "*")
			w.Header().Set("Access-Control-Allow-Credentials", "true")
			w.Header().Set("Access-Control-Allow-Headers", "Content-Type, Authorization")
			w.WriteHeader(http.StatusOK)
			return
		}

		w.Header().Set("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, OPTIONS")
		w.Header().Set("Access-Control-Allow-Headers", "Content-Type")

		handler.ServeHTTP(w, r)
	})
}
