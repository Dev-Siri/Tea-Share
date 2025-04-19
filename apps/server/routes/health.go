package routes

import (
	health_controllers "tea-share/controllers/health"

	"github.com/fasthttp/router"
)

func RegisterHealthRoutes(router *router.Router) {
	router.GET("/health", health_controllers.GetHealthStatus)
}
