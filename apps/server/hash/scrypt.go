package hash

import (
	"os"

	scrypt "github.com/Aoang/firebase-scrypt"
)

var scrpytInstance *scrypt.App;

func InitHash() error {
	app, err := scrypt.New(
		os.Getenv("BASE64_SIGNER_KEY"),
		os.Getenv("BASE64_SALT_SEPARATOR"),
		8,
		14,
	)

	if err != nil {
		return err
	}

	scrpytInstance = app

	return nil
}

func Scrpyt() *scrypt.App {
	return scrpytInstance
}