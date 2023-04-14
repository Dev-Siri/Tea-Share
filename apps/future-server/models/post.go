package models

import "time"

type Post struct {
	Title  string `json:"title"`
	Description string `json:"description"`
	Author string `json:"author"`
	AuthorImage string `json:"authorimage"`
	CreatedAt time.Time `json:"createdAt"`
	People []string `json:"people"`
	PeopleImage []string `json:"peopleImage"`
}