package routes

import (
	"hulutani-api/handler"
	"hulutani-api/layer/transaksi"

	"github.com/gin-gonic/gin"
)

var (
	transaksiRepo    = transaksi.NewRepository(DB)
	transaksiService = transaksi.NewService(transaksiRepo)
	transaksiHandler = handler.NewTransaksiHandler(transaksiService, keranjangService)
)

func RouteTransaksi(r *gin.Engine) {
	r.GET("/transaksi", handler.Middleware(authService), transaksiHandler.ShowAllTransaksi)
	r.GET("/transaksi/:kode_transaksi", handler.Middleware(authService), transaksiHandler.ShowTransaksiByKode)
	r.POST("/transaksi", handler.Middleware(authService), transaksiHandler.CreateTransaksiHandler)
	r.POST("/produk-transaksi", handler.Middleware(authService), transaksiHandler.CreateProdukTransaksiHandler)
	r.PUT("/transaksi/:kode_transaksi", adminMiddleware, transaksiHandler.UpdateTransaksiByKodeHandler)
}
