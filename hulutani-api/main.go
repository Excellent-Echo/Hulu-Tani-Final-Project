package main

import (
	"hulutani-api/docs"
	"hulutani-api/handler"
	"hulutani-api/routes"

	"github.com/gin-gonic/gin"
	ginSwagger "github.com/swaggo/gin-swagger"
	"github.com/swaggo/gin-swagger/swaggerFiles"
)

// @securityDefinitions.apikey Auth
// @in header
// @name Authorization

func main() {
	r := gin.Default()

	//Swagger Config
	docs.SwaggerInfo.Title = "HuluTani API documentation"
	docs.SwaggerInfo.Description = "HuluTani API documentation"
	docs.SwaggerInfo.Version = "1.0"
	docs.SwaggerInfo.Host = "localhost:4444"
	docs.SwaggerInfo.BasePath = ""
	docs.SwaggerInfo.Schemes = []string{"http"}

	//CORS ENABLE
	r.Use(handler.CORSMiddleware())

	// Endpoint Routes
	r.GET("/swagger/*any", ginSwagger.WrapHandler(swaggerFiles.Handler))
	routes.PelangganRoute(r)
	routes.AdminRoute(r)
	routes.KategoriRoute(r)
	routes.ProdukRoute(r)
	routes.ProvinsiRoute(r)
	routes.RouteKota(r)
	routes.AlamatRoute(r)
	routes.KontakRoute(r)
	routes.RouteCost(r)
	// routes.RoutesKeranjang(r)
	routes.RouteTransaksi(r)
	// routes.RouteDetail(r)

	// kalo udah running sekali jangan lupa di comment ya, masih belom nemu untuk handle validasi nya

	// handler.StoreProvinsiDB()
	// handler.StoreKotaDB()

	r.Run(":4444")
}
