package routes

import (
	"hulutani-api/handler"
	detailtransaksi "hulutani-api/layer/detailTransaksi"

	"github.com/gin-gonic/gin"
)

var (
	detailRepo    = detailtransaksi.NewRepository(DB)
	detailService = detailtransaksi.NewService(detailRepo)
	detailHandler = handler.NewDetailHandler(detailService)
)

func RouteDetail(r *gin.Engine) {
	r.POST("/detail-transaksi", detailHandler.CreateDetailTransaksiHandler)
	r.GET("/detail-transaksi/:kode_transaksi", detailHandler.ShowDetailByKodeTransaksi)
}
