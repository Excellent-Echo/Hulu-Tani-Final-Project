package main

import (
	"hulutani-api/handler"
	"hulutani-api/routes"

	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()

	//CORS ENABLE
	r.Use(handler.CORSMiddleware())

	// Endpoint Routes
	routes.PelangganRoute(r)
	routes.KategoriRoute(r)
	routes.ProdukRoute(r)

	r.Run(":4444")
}
