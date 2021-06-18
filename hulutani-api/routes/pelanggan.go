package routes

import (
	"hulutani-api/auth"
	"hulutani-api/config"
	"hulutani-api/handler"
	"hulutani-api/layer/pelanggan"

	"github.com/gin-gonic/gin"
)

var (
	DB               = config.Connection()
	PelangganRepo    = pelanggan.NewRepository(DB)
	PelangganService = pelanggan.NewService(PelangganRepo)
	authService      = auth.NewService()
	pelangganHandler = handler.NewHandler(PelangganService, authService)
)

func PelangganRoute(r *gin.Engine) {
	r.GET("/user", handler.Middleware(authService), pelangganHandler.GetPelangganByIDHandler)
	r.POST("/user/register", pelangganHandler.CreatePelangganHandler)
	r.POST("/user/login", pelangganHandler.LoginPelangganHandler)
}
