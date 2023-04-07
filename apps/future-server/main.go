package main

import (
	"fmt"
	"log"
	"net/http"
	"os"
	"tea-share/controllers"
	"tea-share/db"
	"tea-share/routes"

	"github.com/joho/godotenv"
)

func main() {
	if err := godotenv.Load(); err != nil {
		log.Fatal(err)
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
		log.Fatal(err)
	}

	go http.HandleFunc("/", controllers.NotFound)

	go routes.RegisterPostRoutes()
	go routes.RegisterUserRoutes()

	if err := http.ListenAndServe(addr, nil); err != nil {
		log.Fatal(err)
	}
}
