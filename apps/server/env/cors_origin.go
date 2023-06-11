package env

import "os"

func GetCorsOrigin() string {
	origin := os.Getenv("CORS_ORIGIN")

	if origin == "" {
		origin = "https://tea-share.vercel.app"
	}

	return origin
}
