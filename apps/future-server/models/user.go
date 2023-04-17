package models

import "go.mongodb.org/mongo-driver/bson/primitive"

type User struct {
	ID primitive.ObjectID `json:"_id" bson:"_id"`
	Username  string `json:"title"`
	Email string `json:"email"`
	Image string `json:"image"`
}