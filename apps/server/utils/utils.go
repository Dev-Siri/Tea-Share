package utils

import "go.mongodb.org/mongo-driver/bson/primitive"

func IsValidObjectID(str string) bool {
	_, err := primitive.ObjectIDFromHex(str)
	return err == nil
}

func Contains(slice []string, s string) bool {
	for _, item := range slice {
		if item == s {
			return true
		}
	}
	
	return false
}