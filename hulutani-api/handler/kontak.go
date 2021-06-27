package handler

import (
	"hulutani-api/entity"
	"hulutani-api/helper"
	"hulutani-api/layer/kontak"

	"github.com/gin-gonic/gin"
)

type kontakHandler struct {
	service kontak.Service
}

func NewKontakHandler(service kontak.Service) *kontakHandler {
	return &kontakHandler{service}
}

// GetAllKontak godoc
// @Security Auth
// @Summary Get All Kontak
// @Description Get All Kontak
// @Tags Kontak
// @Accept json
// @Produce json
// @Success 200 {object} helper.Response
// @Failure 401 {object} helper.Failure
// @Failure 500 {object} helper.Failure
// @Router /kontak [get]
func (h *kontakHandler) ShowAllKontaksHandler(c *gin.Context) {
	kontak, err := h.service.GetAllKontak()

	if err != nil {
		responseErr := helper.APIFailure(500, "internal server error", err.Error())
		c.JSON(500, responseErr)
		return
	}

	getKontakResponse := helper.APIResponse(200, "success get all kontak", kontak)

	c.JSON(200, getKontakResponse)
}

// CreateKontak godoc
// @Security Auth
// @Summary Create New Kontak
// @Description Create New Kontak
// @Tags Kontak
// @Accept json
// @Produce json
// @Param kontak body entity.KontakInput true "Data Kontak"
// @Success 200 {object} helper.Response
// @Failure 400 {object} helper.Failure
// @Failure 401 {object} helper.Failure
// @Failure 500 {object} helper.Failure
// @Router /kontak [post]
func (h *kontakHandler) CreateKontakHandler(c *gin.Context) {
	var input entity.KontakInput

	if err := c.ShouldBindJSON(&input); err != nil {
		splitErr := helper.SplitErrorInformation(err)
		responseErr := helper.APIFailure(500, "internal server error", gin.H{"error": splitErr})
		c.JSON(400, responseErr)
	}

	newKontak, err := h.service.SaveNewKontak(input)

	if err != nil {
		responseErr := helper.APIFailure(500, "internal server error", err.Error())
		c.JSON(500, responseErr)
		return
	}

	response := helper.APIResponse(201, "success create new kontak", newKontak)
	c.JSON(201, response)
}
