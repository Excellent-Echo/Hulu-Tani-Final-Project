package routes

import (
	"hulutani-api/handler"
	"hulutani-api/layer/transaksi"

	"github.com/gin-gonic/gin"
)

var (
	transaksiRepo    = transaksi.NewRepository(DB)
	transaksiService = transaksi.NewService(transaksiRepo, keranjangRepo)
	transaksiHandler = handler.NewTransaksiHandler(transaksiService, keranjangService)
)

func RouteTransaksi(r *gin.Engine) {
	r.GET("/transaksi", handler.Middleware(authService), transaksiHandler.ShowAllTransaksi)
	r.GET("/transaksi/:kode_transaksi", transaksiHandler.ShowTransaksiByKode)
	r.POST("/transaksi", handler.Middleware(authService), transaksiHandler.CreateTransaksiHandler)
	r.PUT("/transaksi/:kode_transaksi", transaksiHandler.UpdateTransaksiByKodeHandler)
}
