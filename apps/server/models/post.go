package models

import "time"

type Post struct {
	PostID    string    `json:"postId"`
	Caption   string    `json:"caption"`
	PostImage string    `json:"postImage"`
	CreatedAt time.Time `json:"createdAt"`
	Likes     []Like    `json:"likes"`
	UserID    string    `json:"userId"`
	Username  string    `json:"username"`
	UserImage string    `json:"userImage"`
}
