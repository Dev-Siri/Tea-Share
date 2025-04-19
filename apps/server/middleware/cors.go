package middleware

import (
	"tea-share/env"

	"github.com/valyala/fasthttp"
)

func CORS(next fasthttp.RequestHandler) fasthttp.RequestHandler {
	return func(ctx *fasthttp.RequestCtx) {
		ctx.Response.Header.Set("Access-Control-Allow-Origin", env.GetCorsOrigin())
		ctx.Response.Header.Set("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, OPTIONS")
		ctx.Response.Header.Set("Access-Control-Allow-Headers", "Content-Type")

		next(ctx)
	}
}
