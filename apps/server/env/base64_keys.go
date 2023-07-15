package env

import "os"

func GetBase65Keys() (string, string) {
	base64SignerKey := os.Getenv("BASE64_SIGNER_KEY")
	base64SaltSeparator := os.Getenv("BASE64_SALT_SEPARATOR")

	return base64SignerKey, base64SaltSeparator
}
