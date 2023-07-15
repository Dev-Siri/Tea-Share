package hash

import (
	"tea-share/env"

	scrypt "github.com/Aoang/firebase-scrypt"
)

var scrpytInstance *scrypt.App

func InitHash() error {
	base64SignerKey, base64SaltSeparator := env.GetBase65Keys()

	app, err := scrypt.New(
		base64SignerKey,
		base64SaltSeparator,
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
