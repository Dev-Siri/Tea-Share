package env

import "os"

func GetPort() string {
	port := os.Getenv("PORT")

	if port == "" {
		port = "5000"
	}

	return port
}
