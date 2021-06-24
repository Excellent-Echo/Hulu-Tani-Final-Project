package handler

import (
	"hulutani-api/helper"
	"hulutani-api/layer/cost"

	"github.com/gin-gonic/gin"
)

type costHandler struct {
	service cost.Service
}

func NewCostHandler(service cost.Service) *costHandler {
	return &costHandler{service}
}

// GetCost godoc
// @Summary Get cost by id
// @Description Get cost By ID
// @Tags Cost
// @Accept json
// @Produce json
// @Param destination path string true "destination"
// @Success 200 {object} helper.Response
// @Failure 400 {object} helper.Failure
// @Failure 500 {object} helper.Failure
// @Router /cost/{destination} [get]
func (h *costHandler) GetCost(c *gin.Context) {
	destination := c.Param("destination")

	cost, err := h.service.GetCost(destination)

	if err != nil {
		responseErr := helper.APIFailure(500, "internal server error", gin.H{"error": err.Error()})
		c.JSON(500, responseErr)
	}
	response := helper.APIResponse(200, "success", cost)
	c.JSON(200, response)
}
