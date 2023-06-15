package models

type User struct {
	UserID    string `json:"userId"`
	Username  string `json:"username"`
	UserImage string `json:"userImage"`
	Email     string `json:"email"`
}
