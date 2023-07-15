package health_controllers

import "github.com/valyala/fasthttp"

func GetHealthStatus(ctx *fasthttp.RequestCtx) {
	// Basic health check, just return OK
	ctx.WriteString("OK")
}
