package user_controllers

import (
	"tea-share/email"

	"github.com/valyala/fasthttp"
)

func ResetPassword(ctx *fasthttp.RequestCtx) {
	response, err := email.SendEmail("reset password", "example@gmail.com", "<h1>hello world</h1>")

	if err != nil {
		ctx.Error("Failed to send a reset password email", fasthttp.StatusInternalServerError)
		return
	}

	if response.StatusCode != 202 {
		ctx.WriteString("Email was unable to be sent ")
	}
}
