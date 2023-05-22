package post_controllers

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"strconv"
	"tea-share/db"
	"tea-share/models"

	"github.com/andybalholm/brotli"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo/options"
)

func GetPosts(w http.ResponseWriter, r *http.Request) {
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

	cursor, postsFetchError := db.PostsCollection().Find(
		r.Context(), bson.D{},
		options.Find().SetSkip(int64(startIndex)),
		options.Find().SetLimit(int64(limit)),
		options.Find().SetSort(bson.M{"createdAt": -1}),
	)

	if postsFetchError != nil {
		w.WriteHeader(http.StatusInternalServerError)
		log.Printf("%v", postsFetchError)
		return
	}

	defer cursor.Close(r.Context())

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

	brotliWriter := brotli.NewWriter(w)

	fmt.Fprintf(brotliWriter, "%s", postJSONBytes)

	brotliWriter.Close()
}
