package routes

import (
	"hulutani-api/handler"
	"hulutani-api/layer/cost"

	"github.com/gin-gonic/gin"
)

var (
	costService = cost.NewService()
	costHandler = handler.NewCostHandler(costService)
)

func RouteCost(r *gin.Engine) {
	r.POST("/cost/:destination", costHandler.GetCost)
}
