package routes

import (
	"hulutani-api/handler"
	"hulutani-api/layer/alamat"

	"github.com/gin-gonic/gin"
)

var (
	alamatRepository = alamat.NewRepository(DB)
	alamatService    = alamat.NewService(alamatRepository)
	alamatHandler    = handler.NewAlamatHandler(alamatService)
)

func AlamatRoute(r *gin.Engine) {
	r.GET("/alamat/:alamat_id", handler.Middleware(authService), alamatHandler.ShowAlamatByAlamatId)
	r.GET("/alamat/", handler.Middleware(authService), alamatHandler.ShowAlamatByPelangganId)
	r.POST("/alamat", handler.Middleware(authService), alamatHandler.CreateAlamatHandler)
	r.PUT("/alamat/:alamat_id", handler.Middleware(authService), alamatHandler.UpdateAlamatByIdHandler)
	r.DELETE("/alamat/:alamat_id", handler.Middleware(authService), alamatHandler.DeleteAlamatByIdHandler)
}
