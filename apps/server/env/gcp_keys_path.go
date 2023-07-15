package env

import (
	"log"
	"os"
)

func GetGCPKeysPath() string {
	gcpKeysPath := os.Getenv("GCP_KEYS_PATH")

	if gcpKeysPath == "" {
		log.Printf("GCP Keys path not specified in environment variables")
	}

	return gcpKeysPath
}
