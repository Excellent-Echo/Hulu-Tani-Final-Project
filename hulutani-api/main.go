package main

import (
	"hulutani-api/routes"

	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()

	routes.PelangganRoute(r)
	routes.KategoriRoute(r)

	r.Run(":5555")
}
