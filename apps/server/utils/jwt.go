package utils

import (
	"encoding/json"
	"fmt"
	"tea-share/env"
	response_models "tea-share/models/responses"

	"github.com/dgrijalva/jwt-go"
)

func CreateUserJWTResponse(userID string, username string, userImage string, email string) ([]byte, error) {
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
		"userId":    userID,
		"username":  username,
		"userImage": userImage,
		"email":     email,
	})

	authToken, tokenSignError := token.SignedString(env.GetJWTSecretKey())

	if tokenSignError != nil {
		return nil, fmt.Errorf("failed to sign your auth token")
	}

	response := response_models.AuthResponse{Token: authToken}
	jsonResponse, jsonMarshalError := json.Marshal(response)

	if jsonMarshalError != nil {
		return nil, fmt.Errorf("failed to encode response as JSON")
	}

	return jsonResponse, nil
}
