package models

import "time"

type Post struct {
	PostID      string    `json:"postId"`
	Title       string    `json:"title"`
	Description string    `json:"description"`
	PostImage   string    `json:"postImage"`
	CreatedAt   time.Time `json:"createdAt"`
	Likes       []Like    `json:"likes"`
	Comments    []Comment `json:"comments"`
	UserID      string    `json:"userId"`
	Username    string    `json:"username"`
	UserImage   string    `json:"userImage"`
}
