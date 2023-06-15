package models

import "time"

type LikedPerson struct {
	Username string `json:"username"`
	Image    string `json:"userImage"`
}

type Post struct {
	PostID      string        `json:"postId"`
	Title       string        `json:"title"`
	Description string        `json:"description"`
	PostImage   string        `json:"postImage"`
	CreatedAt   time.Time     `json:"createdAt"`
	Likes       []LikedPerson `json:"likes"`
	UserID      string        `json:"userId"`
	Username    string        `json:"username"`
	UserImage   string        `json:"userImage"`
}
