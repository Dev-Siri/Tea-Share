package main

import (
	"fmt"
	"log"
	"os"
	"tea-share/db"
	"tea-share/email"
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

	addr := ":" + env.GetPort()

	fmt.Printf("Server running on %s\n", addr)

	dbURL := os.Getenv("DSN")

	if err := db.Connect(dbURL); err != nil {
		log.Printf("%v", err)
		return
	}

	if err := hash.InitHash(); err != nil {
		log.Printf("%v", err)
		return
	}

	if err := db.FileUploadInit(); err != nil {
		log.Printf("%v", err)
		return
	}

	if err := db.FileUploadInit(); err != nil {
		log.Printf("%v", err)
		return
	}

	go email.InitEmail()

	router := fasthttprouter.New()

	go routes.RegisterPostRoutes(router)
	go routes.RegisterUserRoutes(router)

	if err := fasthttp.ListenAndServe(addr, middleware.CORS(router.Handler)); err != nil {
		log.Printf("%v", err)
	}
}
