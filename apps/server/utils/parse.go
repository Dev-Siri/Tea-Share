package utils

import (
	"encoding/json"
	"tea-share/models"
)

func ParseLikes(likesJSON []uint8) ([]models.Like, error) {
	var likes []models.Like

	if err := json.Unmarshal([]byte(likesJSON), &likes); err != nil {
		return nil, err
	}

	return likes, nil
}

func ParseComments(commentsJSON []uint8) ([]models.Comment, error) {
	var comments []models.Comment

	if err := json.Unmarshal([]byte(commentsJSON), &comments); err != nil {
		return nil, err
	}

	return comments, nil
}
