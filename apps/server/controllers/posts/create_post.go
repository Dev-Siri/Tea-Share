package post_controllers

import (
	"encoding/json"
	"fmt"
	"io"
	"log"
	"net/http"
	"tea-share/db"
	"tea-share/models"
	"time"
)

func CreatePost(w http.ResponseWriter, r *http.Request) {
	body, bodyReadError := io.ReadAll(r.Body)

	if bodyReadError != nil {
		w.WriteHeader(http.StatusOK)
		log.Printf("Failed to read request body")
		return
	}

	var post models.Post = models.Post{
		CreatedAt:   time.Now().UTC(),
		People:      []string{},
		PeopleImage: []string{},
	}

	if bodyParseError := json.Unmarshal(body, &post); bodyParseError != nil {
		w.WriteHeader(http.StatusInternalServerError)
		log.Printf("Failed to parse request body")
		return
	}

	result, dbInsertError := db.PostsCollection().InsertOne(r.Context(), post)

	if dbInsertError != nil {
		w.WriteHeader(http.StatusInternalServerError)
		log.Printf("Failed to create post")
		return
	}

	w.WriteHeader(http.StatusCreated)

	fmt.Fprintf(w, "Inserted post with ID: %v", result.InsertedID)
}
