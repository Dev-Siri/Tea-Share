package utils

import "net/mail"

func IsValidEmail(email string) bool {
	_, err := mail.ParseAddress(email)
	return err == nil
}

func IsValidUserID(id string) (bool, string) {
	if id == "" {
		return false, "Your ID seems to be missing. Are you logged in?"
	}

	if len(id) != 36 {
		return false, "Your ID is in the wrong shape. It has either been tampered with or invalid. Please re-login"
	}

	return true, ""
}
