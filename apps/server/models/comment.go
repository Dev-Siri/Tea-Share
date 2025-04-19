package models

import "time"

type Comment struct {
	Username  string    `json:"username"`
	UserImage string    `json:"userImage"`
	CreatedAt time.Time `json:"createdAt"`
	Comment   string    `json:"comment"`
}
