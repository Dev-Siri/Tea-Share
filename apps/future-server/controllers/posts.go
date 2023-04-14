package controllers

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"tea-share/db"
	"tea-share/models"

	"go.mongodb.org/mongo-driver/bson"
)

func GetPosts(w http.ResponseWriter, r *http.Request) {
	postsCollection := db.GetDB().Collection("postmessages")
	cursor, postsFetchError := postsCollection.Find(r.Context(), bson.D{})

	if postsFetchError != nil {
		log.Fatal(postsFetchError)
	}

	defer cursor.Close(r.Context())

	var posts []models.Post

	for cursor.Next(r.Context()) {
		var post models.Post
		
		postDecodeError := cursor.Decode(&post)

		if postDecodeError != nil {
			log.Fatal(postDecodeError)
		}

		posts = append(posts, post)
	}

	postJSONBytes, jsonError := json.Marshal(posts)

	if jsonError != nil {
		log.Fatal(jsonError)
	}

	w.Header().Set("Content-Type", "application/json")

	fmt.Fprintf(w, "%s", postJSONBytes)

}

func CreatePost(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Create a post")
}
