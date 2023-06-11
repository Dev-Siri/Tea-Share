package user_controllers

import (
	"encoding/json"
	"io"
	"log"
	"net/http"
	"tea-share/db"
	"tea-share/env"
	"tea-share/models"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
)

func UpdateUser(w http.ResponseWriter, r *http.Request) {
	body, bodyReadError := io.ReadAll(r.Body)
	searchParams := r.URL.Query()

	id := searchParams.Get("id")

	if id == "" {
		w.WriteHeader(http.StatusBadRequest)
		log.Printf("Search param `id` not provided")
		return
	}

	userID, idParseError := primitive.ObjectIDFromHex(id)

	if idParseError != nil {
		w.WriteHeader(http.StatusBadRequest)
		log.Printf("Search param `id` is not a valid ObjectID")
		return
	}

	if bodyReadError != nil {
		w.WriteHeader(http.StatusOK)
		log.Printf("Failed to read request body")
		return
	}

	var user models.User

	if bodyParseError := json.Unmarshal(body, &user); bodyParseError != nil {
		w.WriteHeader(http.StatusInternalServerError)
		log.Printf("Failed to parse request body")
		return
	}

	db.UsersCollection().FindOneAndUpdate(
		r.Context(),
		bson.M{"_id": userID},
		bson.M{
			"$set": user,
		},
	)

	w.WriteHeader(http.StatusNoContent)
	w.Header().Set("Access-Control-Allow-Origin", env.CorsOrigin)
}
