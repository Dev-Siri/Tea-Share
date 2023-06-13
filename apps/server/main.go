package main

import (
	"fmt"
	"log"
	"net/http"
	"os"
	error_handlers "tea-share/controllers/errors"
	"tea-share/db"
	"tea-share/env"
	"tea-share/middleware"

	"github.com/joho/godotenv"
)

func main() {
	if err := godotenv.Load(); err != nil {
		log.Printf("%v", err)
		return
	}

	port := env.GetPort()

	addr := fmt.Sprintf(":%s", port)

	fmt.Printf("Server running on %s\n", addr)

	dbURL := os.Getenv("MONGO_CONNECTION_URL")

	if err := db.Connect(dbURL, "Tea-Share"); err != nil {
		log.Printf("%v", err)
		return
	}

	server := http.NewServeMux()

	go server.HandleFunc("/", error_handlers.NotFound)

	go server.HandleFunc("/progress-tracker", func(w http.ResponseWriter, r *http.Request) {
		bytes, err := os.ReadFile("progress-tracker.txt")

		if err != nil {
			http.Error(w, "Failed to read progress tracker", http.StatusInternalServerError)
			return
		}

		fmt.Fprint(w, string(bytes))
	})

	// go routes.RegisterPostRoutes(server)
	// go routes.RegisterUserRoutes(server)

	handler := middleware.CorsMiddleware(server)

	if err := http.ListenAndServe(addr, handler); err != nil {
		log.Printf("%v", err)
	}
}
