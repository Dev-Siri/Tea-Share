package main

import (
	"fmt"
	"log"
	"os"
	"tea-share/db"
	"tea-share/env"
	"tea-share/hash"
	"tea-share/middleware"
	"tea-share/routes"

	"github.com/buaazp/fasthttprouter"
	"github.com/joho/godotenv"
	"github.com/valyala/fasthttp"
)

func main() {
	if err := godotenv.Load(); err != nil {
		log.Printf("%v", err)
		return
	}

	port := env.GetPort()
	addr := fmt.Sprintf(":%s", port)

	fmt.Printf("Server running on %s\n", addr)

	dbURL := os.Getenv("DSN")

	if err := db.Connect(dbURL); err != nil {
		log.Printf("%v", err)
		return
	}

	if err := hash.InitHash(); err != nil {
		log.Printf("%v", err)
	}

	router := fasthttprouter.New()

	go routes.RegisterPostRoutes(router)
	go routes.RegisterUserRoutes(router)

	if err := fasthttp.ListenAndServe(addr, middleware.CORS(router.Handler)); err != nil {
		log.Printf("%v", err)
	}
}
