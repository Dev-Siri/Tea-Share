package email

import (
	"os"

	"github.com/sendgrid/rest"
	"github.com/sendgrid/sendgrid-go"
	"github.com/sendgrid/sendgrid-go/helpers/mail"
)

var emailClient *sendgrid.Client

func InitEmail() {
	apiKey := os.Getenv("SEND_GRID_API_KEY")

	client := sendgrid.NewSendClient(apiKey)

	emailClient = client
}

func SendEmail(subject string, to string, html string) (*rest.Response, error) {
	from := mail.NewEmail("TeaTeams", "teashareteams@gmail.com")
	receiver := mail.NewEmail(to, to)
	plainTextContent := "and easy to do anywhere, even with Go"

	message := mail.NewSingleEmail(from, subject, receiver, plainTextContent, html)
	response, err := emailClient.Send(message)

	return response, err
}
