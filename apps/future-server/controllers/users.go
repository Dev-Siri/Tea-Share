package controllers

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"strconv"
	"tea-share/db"
	"tea-share/models"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo/options"
)

func GetUsers(w http.ResponseWriter, r *http.Request) {
	searchParams := r.URL.Query()

	limitParam := searchParams.Get("limit")
	pageParam := searchParams.Get("page")

	limit, limitParseError := strconv.Atoi(limitParam)

	if limitParseError != nil {
		w.WriteHeader(400)
		log.Printf("Failed to parse `limit` as integer")
		return
	}

	page, pageParseError := strconv.Atoi(pageParam)

	if pageParseError != nil {
		w.WriteHeader(400)
		log.Printf("Failed to parse `page` as integer")
		return
	}

	startIndex := (page - 1) * limit

	cursor, usersFetchError := db.UsersCollection().Find(
		r.Context(), bson.D{},
		options.Find().SetSkip(int64(startIndex)),
		options.Find().SetLimit(int64(limit)),
	)

	if usersFetchError != nil {
		w.WriteHeader(500)
		log.Printf("%v", usersFetchError)
		return
	}

	defer cursor.Close(r.Context())

	var users []models.User

	for cursor.Next(r.Context()) {
		var user models.User

		postDecodeError := cursor.Decode(&user)

		if postDecodeError != nil {
			w.WriteHeader(500)
			log.Printf("%v", postDecodeError)
			return
		}

		users = append(users, user)
	}

	userJSONBytes, jsonError := json.Marshal(users)

	if jsonError != nil {
		w.WriteHeader(500)
		log.Printf("%v", jsonError)
		return
	}

	w.Header().Set("Content-Type", "application/json")

	fmt.Fprintf(w, "%s", userJSONBytes)
}

func CreateUser(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Create a post")
}
