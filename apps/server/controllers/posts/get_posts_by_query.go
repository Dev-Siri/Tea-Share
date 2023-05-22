package post_controllers

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"tea-share/db"
	"tea-share/models"
	"tea-share/utils"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo/options"
)

func GetPostsBySearchTerm(w http.ResponseWriter, r *http.Request) {
	searchParams := r.URL.Query()

	q := searchParams.Get("q")
	fromUser := searchParams.Get("fromUser")

	if q == "" {
		w.WriteHeader(http.StatusOK)
		log.Printf("Search param `q` not provided")
		return
	}

	filter := bson.M{
		"$or": bson.A{
			bson.M{
				"title": bson.M{"$regex": q},
			},
			bson.M{
				"description": bson.M{"$regex": q},
			},
		},
	}

	if fromUser == "true" {
		filter = bson.M{"author": q}
	}

	if utils.IsValidObjectID(q) {
		id, _ := primitive.ObjectIDFromHex(q)

		filter = bson.M{"_id": id}
	}

	cursor, postsFetchError := db.PostsCollection().Find(
		r.Context(), filter,
		options.Find().SetSort(bson.M{"createdAt": -1}),
	)

	if postsFetchError != nil {
		w.WriteHeader(http.StatusInternalServerError)
		log.Printf("%v", postsFetchError)
		return
	}

	var posts []models.Post

	for cursor.Next(r.Context()) {
		var post models.Post

		postDecodeError := cursor.Decode(&post)

		if postDecodeError != nil {
			w.WriteHeader(http.StatusInternalServerError)
			log.Printf("%v", postDecodeError)
			return
		}

		posts = append(posts, post)
	}

	postJSONBytes, jsonError := json.Marshal(posts)

	if jsonError != nil {
		w.WriteHeader(http.StatusInternalServerError)
		log.Printf("%v", jsonError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.Header().Set("Content-Encoding", "br")
	w.WriteHeader(http.StatusOK)

	fmt.Fprintf(w, "%s", postJSONBytes)
}
