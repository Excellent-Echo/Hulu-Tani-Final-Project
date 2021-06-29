package routes

import (
	"hulutani-api/handler"
	"hulutani-api/layer/kontak"

	"github.com/gin-gonic/gin"
)

var (
	kontakRepo    = kontak.NewRepository(DB)
	kontakService = kontak.NewKontakService(kontakRepo)
	kontakHandler = handler.NewKontakHandler(kontakService)
)

func KontakRoute(r *gin.Engine) {
	r.GET("/kontak", adminMiddleware, kontakHandler.ShowAllKontaksHandler)
	r.POST("/kontak", kontakHandler.CreateKontakHandler)
}
