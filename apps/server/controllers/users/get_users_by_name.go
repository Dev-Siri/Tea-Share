package user_controllers

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"tea-share/db"
	"tea-share/env"
	"tea-share/models"

	"go.mongodb.org/mongo-driver/bson"
)

func GetUsersByName(w http.ResponseWriter, r *http.Request) {
	searchParams := r.URL.Query()

	name := searchParams.Get("name")
	exact := searchParams.Get("exact")

	if name == "" {
		w.WriteHeader(http.StatusBadRequest)
		log.Printf("Search param `name` not provided")
		return
	}

	filter := bson.M{
		"username": bson.M{"$regex": name},
	}

	if exact == "true" {
		filter = bson.M{
			"username": name,
		}
	}

	cursor, usersFetchError := db.UsersCollection().Find(
		r.Context(), filter,
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
