package models

import (
	"time"

	"go.mongodb.org/mongo-driver/bson/primitive"
)

type Post struct {
	ID primitive.ObjectID `json:"_id" bson:"_id"`
	Title  string `json:"title"`
	Description string `json:"description"`
	Author string `json:"author"`
	AuthorImage string `json:"authorimage"`
	CreatedAt time.Time `json:"createdAt"`
	People []string `json:"people"`
	PeopleImage []string `json:"peopleImage"`
}