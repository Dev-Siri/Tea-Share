package response_models

import "tea-share/models"

type CommentsResponse struct {
	Total    int              `json:"total"`
	Comments []models.Comment `json:"comments"`
}
