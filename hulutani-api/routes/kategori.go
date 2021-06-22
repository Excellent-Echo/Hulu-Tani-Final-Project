package routes

import (
	"hulutani-api/handler"
	"hulutani-api/layer/kategori"

	"github.com/gin-gonic/gin"
)

var (
	kategoriRepository = kategori.NewRepository(DB)
	kategoriService    = kategori.NewService(kategoriRepository, produkRepo)
	kategoriHandler    = handler.NewKategoriHandler(kategoriService)
)

func KategoriRoute(r *gin.Engine) {
	r.GET("/kategori", kategoriHandler.ShowAllKategorisHandler)
	r.GET("/kategori/:kategori_id", kategoriHandler.ShowKategoriByIDHandler)
	r.POST("/kategori", handler.Middleware(authService), kategoriHandler.CreateKategoriHandler)
	r.PUT("/kategori/:kategori_id", handler.Middleware(authService), kategoriHandler.UpdateKategoriByIDHandler)
	r.DELETE("/kategori/:kategori_id", handler.Middleware(authService), kategoriHandler.DeleteKategoriByIDHandler)
}
