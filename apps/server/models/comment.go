package models

type Comment struct {
	Username  string `json:"username"`
	UserImage string `json:"userImage"`
	Comment   string `json:"comment"`
}
