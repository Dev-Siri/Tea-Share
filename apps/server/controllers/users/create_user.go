package user_controllers

import (
	"encoding/json"
	"fmt"
	"io"
	"log"
	"net/http"
	"tea-share/db"
	"tea-share/env"
	"tea-share/models"
)

func CreateUser(w http.ResponseWriter, r *http.Request) {
	body, bodyReadError := io.ReadAll(r.Body)

	if bodyReadError != nil {
		w.WriteHeader(http.StatusOK)
		log.Printf("Failed to read request body")
		return
	}

	var user models.User

	if bodyParseError := json.Unmarshal(body, &user); bodyParseError != nil {
		w.WriteHeader(http.StatusInternalServerError)
		log.Printf("Failed to parse request body")
	}

	result, dbInsertError := db.UsersCollection().InsertOne(r.Context(), user)

	if dbInsertError != nil {
		w.WriteHeader(http.StatusInternalServerError)
		log.Printf("Failed to create user")
	}

	w.WriteHeader(http.StatusCreated)
	w.Header().Set("Access-Control-Allow-Origin", env.CorsOrigin)

	fmt.Fprintf(w, "Inserted user with ID: %v", result.InsertedID)
}
