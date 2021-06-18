package main

import (
	"hulutani-api/routes"

	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()

	routes.PelangganRoute(r)
	routes.KategoriRoute(r)
	routes.ProdukRoute(r)

	r.Run(":4444")
}
