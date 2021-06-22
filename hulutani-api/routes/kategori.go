package routes

import (
	"hulutani-api/handler"
	"hulutani-api/layer/kategori"

	"github.com/gin-gonic/gin"
)

var (
	kategoriRepository = kategori.NewRepository(DB)
	kategoriService    = kategori.NewService(kategoriRepository)
	kategoriHandler    = handler.NewKategoriHandler(kategoriService)
)

func KategoriRoute(r *gin.Engine) {
	r.GET("/kategori", kategoriHandler.ShowAllKategorisHandler)
	r.GET("/kategori/:kategori_id", kategoriHandler.ShowKategoriByIDHandler)
	r.POST("/kategori", kategoriHandler.CreateKategoriHandler)
	r.PUT("/kategori/:kategori_id", kategoriHandler.UpdateKategoriByIDHandler)
	r.DELETE("/kategori/:kategori_id", kategoriHandler.DeleteKategoriByIDHandler)
}
