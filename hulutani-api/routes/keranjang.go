package routes

import (
	"hulutani-api/handler"
	"hulutani-api/layer/keranjang"

	"github.com/gin-gonic/gin"
)

var (
	keranjangRepo    = keranjang.NewRepository(DB)
	keranjangService = keranjang.NewService(keranjangRepo)
	keranjangHandler = handler.NewKeranjangHandler(keranjangService)
)

func RoutesKeranjang(r *gin.Engine) {
	r.GET("/keranjang/:kode_keranjang", handler.Middleware(authService), keranjangHandler.ShowKeranjangByid)
	r.POST("/keranjang", handler.Middleware(authService), keranjangHandler.CreateKeranjangHandler)
	r.DELETE("/keranjang/:kode_keranjang", keranjangHandler.DeleteKeranjangHandler)
}
