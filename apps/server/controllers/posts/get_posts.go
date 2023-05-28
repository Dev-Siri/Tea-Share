package post_controllers

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"strconv"
	"sync"
	"tea-share/db"
	"tea-share/models"

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

	var wg sync.WaitGroup
	var mu sync.Mutex
	var posts []models.Post

	for cursor.Next(r.Context()) {
		wg.Add(1)

		go func() {
			defer wg.Done()

			var post models.Post

			postDecodeError := cursor.Decode(&post)

			if postDecodeError != nil {
				log.Printf("%v", postDecodeError)
				return
			}

			mu.Lock()
			posts = append(posts, post)
			mu.Unlock()
		}()
	}

	wg.Wait()

	postJSONBytes, jsonError := json.Marshal(posts)

	if jsonError != nil {
		w.WriteHeader(http.StatusInternalServerError)
		log.Printf("%v", jsonError)
		return
	}

	w.Header().Set("Content-Type", "application/json")

	fmt.Fprintf(w, "%s", postJSONBytes)
}
