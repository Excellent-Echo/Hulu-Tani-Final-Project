package routes

import (
	"hulutani-api/handler"
	"hulutani-api/layer/produk"

	"github.com/gin-gonic/gin"
)

var (
	produkRepo    = produk.NewRepository(DB)
	produkService = produk.NewService(produkRepo)
	produkHandler = handler.NewProdukHandler(produkService)
)

func ProdukRoute(r *gin.Engine) {
	r.GET("/produk", produkHandler.ShowAllProduksHandler)
	r.GET("/produk/nama/:nama_produk", produkHandler.ShowProdukByNameHandler)
	r.GET("/produk/:produk_id", produkHandler.ShowProdukByIdHandler)
	r.POST("/produk/harga", produkHandler.ShowProdukByHargaHandler)
	r.POST("/produk", handler.Middleware(authService), produkHandler.CreateProdukHandler)
	r.PUT("/produk/:produk_id", handler.Middleware(authService), produkHandler.UpdateProdukByIDHandler)
	r.DELETE("/produk/:produk_id", handler.Middleware(authService), produkHandler.DeleteProdukByIDHandler)
}
