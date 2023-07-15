package env

import "os"

func GetJWTSecretKey() []byte {
	secretKey := os.Getenv("JWT_SECRET")

	return []byte(secretKey)
}
