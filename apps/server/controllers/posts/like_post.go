package post_controllers

import (
	"encoding/json"
	"fmt"
	"io"
	"log"
	"net/http"
	"tea-share/db"
	"tea-share/models"
	"tea-share/utils"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
)

func LikePost(w http.ResponseWriter, r *http.Request) {
	id := r.URL.Query().Get("id")

	body, bodyReadError := io.ReadAll(r.Body)

	if bodyReadError != nil {
		w.WriteHeader(http.StatusBadRequest)
		log.Printf("Failed to read request body")
		return
	}

	var user models.User

	if bodyParseError := json.Unmarshal(body, &user); bodyParseError != nil {
		w.WriteHeader(http.StatusInternalServerError)
		log.Printf("Failed to parse request body")
		return
	}

	if !utils.IsValidObjectID(id) {
		w.WriteHeader(http.StatusBadRequest)
		log.Printf("No posts with that ID")
		return
	}

	var updatedPost models.Post

	postID, idParseError := primitive.ObjectIDFromHex(id)

	if idParseError != nil {
		w.WriteHeader(http.StatusInternalServerError)
		log.Printf("Failed to parse post ID")
		return
	}

	post := db.PostsCollection().FindOne(r.Context(), bson.M{"_id": postID})
	postDecodeError := post.Decode(&updatedPost)

	if postDecodeError != nil {
		w.WriteHeader(http.StatusInternalServerError)
		log.Printf("%v", postDecodeError)
		return
	}

	alreadyLiked := utils.Contains(updatedPost.People, user.Username)

	if alreadyLiked {
		w.WriteHeader(http.StatusNotModified)
		return
	}

	db.PostsCollection().FindOneAndUpdate(
		r.Context(), bson.M{"_id": postID},
		bson.M{
			"$set": bson.M{
				"people":      append(updatedPost.People, user.Username),
				"peopleImage": append(updatedPost.PeopleImage, user.Image),
			},
		},
	)

	jsonBytes, jsonParseError := json.Marshal(updatedPost)

	if jsonParseError != nil {
		w.WriteHeader(http.StatusInternalServerError)
		log.Printf("%v", jsonParseError)
		return
	}

	w.Header().Set("Content-Type", "application/json")

	w.WriteHeader(http.StatusOK)

	fmt.Fprintf(w, "%s", jsonBytes)
}
