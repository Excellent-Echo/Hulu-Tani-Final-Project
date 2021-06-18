package main

import (
	"hulutani-api/routes"

	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()

	routes.PelangganRoute(r)

	r.Run(":5555")
}
