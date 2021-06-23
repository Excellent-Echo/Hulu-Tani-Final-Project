package routes

import (
	"hulutani-api/handler"
	"hulutani-api/layer/kota"

	"github.com/gin-gonic/gin"
)

var (
	kotaRepo    = kota.NewRepository(DB)
	kotaService = kota.NewService(kotaRepo)
	kotaHandler = handler.NewKotaHandler(kotaService)
)

func RouteKota(r *gin.Engine) {
	r.GET("/kota", kotaHandler.ShowAllKota)
	r.GET("/kota/:id_kota", kotaHandler.ShowkotaByID)
}
