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
	"tea-share/routes"

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

	go routes.RegisterPostRoutes(server)
	go routes.RegisterUserRoutes(server)

	handler := middleware.CorsMiddleware(server)

	if err := http.ListenAndServe(addr, handler); err != nil {
		log.Printf("%v", err)
	}
}
