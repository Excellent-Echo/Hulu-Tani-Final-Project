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

func (h *kontakHandler) ShowAllKontaksHandler(c *gin.Context) {
	kontak, err := h.service.GetAllKontak()

	if err != nil {
		responseErr := helper.APIResponse(500, "internal server error", err.Error())
		c.JSON(500, responseErr)
		return
	}

	getKontakResponse := helper.APIResponse(200, "success get all kontak", kontak)

	c.JSON(200, getKontakResponse)
}

func (h *kontakHandler) CreateKontakHandler(c *gin.Context) {
	var input entity.KontakInput

	if err := c.ShouldBindJSON(&input); err != nil {
		splitErr := helper.SplitErrorInformation(err)
		responseErr := helper.APIResponse(500, "internal server error", gin.H{"error": splitErr})
		c.JSON(400, responseErr)
	}

	newKontak, err := h.service.SaveNewKontak(input)

	if err != nil {
		responseErr := helper.APIResponse(500, "internal server error", err.Error())
		c.JSON(500, responseErr)
		return
	}

	response := helper.APIResponse(201, "success create new produk", newKontak)
	c.JSON(201, response)
}