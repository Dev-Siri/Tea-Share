package main

import (
	"fmt"
	"log"
	"net/http"
	"os"
	error_handlers "tea-share/controllers/errors"
	"tea-share/db"
	"tea-share/routes"

	"github.com/joho/godotenv"
)

func main() {
	if err := godotenv.Load(); err != nil {
		log.Printf("%v", err)
		return
	}

	port := os.Getenv("PORT")

	if port == "" {
		port = "5000"
	}

	addr := fmt.Sprintf(":%s", port)

	fmt.Printf("Server running on %s\n", addr)

	dbURL := os.Getenv("MONGO_CONNECTION_URL")

	if err := db.Connect(dbURL, "Tea-Share"); err != nil {
		log.Printf("%v", err)
		return
	}

	go http.HandleFunc("/", error_handlers.NotFound)

	go routes.RegisterPostRoutes()
	go routes.RegisterUserRoutes()

	if err := http.ListenAndServe(addr, nil); err != nil {
		log.Printf("%v", err)
	}
}
