package user_controllers

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"strconv"
	"tea-share/db"
	"tea-share/env"
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
		w.WriteHeader(http.StatusBadRequest)
		log.Printf("Failed to parse `limit` as integer")
		return
	}

	page, pageParseError := strconv.Atoi(pageParam)

	if pageParseError != nil {
		w.WriteHeader(http.StatusBadRequest)
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
		w.WriteHeader(http.StatusInternalServerError)
		log.Printf("%v", usersFetchError)
		return
	}

	defer cursor.Close(r.Context())

	var users []models.User

	for cursor.Next(r.Context()) {
		var user models.User

		postDecodeError := cursor.Decode(&user)

		if postDecodeError != nil {
			w.WriteHeader(http.StatusInternalServerError)
			log.Printf("%v", postDecodeError)
			return
		}

		users = append(users, user)
	}

	userJSONBytes, jsonError := json.Marshal(users)

	if jsonError != nil {
		w.WriteHeader(http.StatusInternalServerError)
		log.Printf("%v", jsonError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.Header().Set("Access-Control-Allow-Origin", env.CorsOrigin)

	fmt.Fprintf(w, "%s", userJSONBytes)
}
