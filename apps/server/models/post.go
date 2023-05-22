package models

import (
	"time"

	"go.mongodb.org/mongo-driver/bson/primitive"
)

type Post struct {
	ID          primitive.ObjectID `json:"_id" bson:"_id,omitempty"`
	Title       string             `json:"title" bson:"title"`
	Description string             `json:"description" bson:"description"`
	Image       string             `json:"image" bson:"image"`
	Author      string             `json:"author" bson:"author"`
	AuthorImage string             `json:"authorImage" bson:"authorImage"`
	CreatedAt   time.Time          `json:"createdAt" bson:"createdAt"`
	People      []string           `json:"people" bson:"people"`
	PeopleImage []string           `json:"peopleImage" bson:"peopleImage"`
}
