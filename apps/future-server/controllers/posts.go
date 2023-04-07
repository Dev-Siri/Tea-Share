package controllers

import (
	"fmt"
	"net/http"
	"tea-share/db"
)

func GetPosts(w http.ResponseWriter, r *http.Request) {
	postsCollection := db.GetDB().Collection("postmessages")
	posts := postsCollection.Find()

	fmt.Fprintf(w, posts)
}

func CreatePost(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Create a post")
}
