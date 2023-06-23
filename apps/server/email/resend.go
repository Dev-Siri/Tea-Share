package email

import (
	"os"

	"github.com/resendlabs/resend-go"
)

var emailClient *resend.Client

func InitEmail() {
	apiKey := os.Getenv("RESEND_API_KEY")

	client := resend.NewClient(apiKey)

	emailClient = client
}

func SendEmail(subject string, to string, html string) error {
	params := &resend.SendEmailRequest{
		From:    "tea-share@noreply.com",
		To:      []string{to},
		Subject: subject,
		Html:    html,
	}

	_, err := emailClient.Emails.Send(params)

	return err
}
