package routes

import (
	"hulutani-api/handler"
	"hulutani-api/layer/provinsi"

	"github.com/gin-gonic/gin"
)

var (
	provinsiRepo    = provinsi.NewRepository(DB)
	provinsiService = provinsi.NewService(provinsiRepo)
	provinsiHandler = handler.NewProvinsiHandler(provinsiService)
)

func ProvinsiRoute(r *gin.Engine) {
	r.GET("/provinsi", provinsiHandler.ShowAllProvinsi)
	r.GET("/provinsi/:id_provinsi", provinsiHandler.ShowProvinsiByID)
}
