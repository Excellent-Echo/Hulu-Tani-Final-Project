package handler

import (
	"hulutani-api/entity"
	"hulutani-api/helper"
	"hulutani-api/layer/kategori"

	"github.com/gin-gonic/gin"
)

type kategoriHandler struct {
	service kategori.Service
}

func NewKategoriHandler(service kategori.Service) *kategoriHandler {
	return &kategoriHandler{service}
}

func (h *kategoriHandler) ShowAllKategorisHandler(c *gin.Context) {
	kategori, err := h.service.GetAllKategori()

	if err != nil {
		responseErr := helper.APIResponse(500, "internal server error", err.Error())
		c.JSON(500, responseErr)
		return
	}

	response := helper.APIResponse(200, "success get all kategori data", kategori)

	c.JSON(200, response)
}

func (h *kategoriHandler) ShowKategoriByIDHandler(c *gin.Context) {
	id := c.Param("kategori_id")

	kategori, err := h.service.GetKategoriByID(id)
	if err != nil {
		responseErr := helper.APIResponse(500, "internal server error", gin.H{"error": err.Error()})

		c.JSON(500, responseErr)
		return
	}
	response := helper.APIResponse(200, "success get kategori", kategori)
	c.JSON(200, response)
}

func (h *kategoriHandler) CreateKategoriHandler(c *gin.Context) {

	var inputKategori entity.KategoriInput

	if err := c.ShouldBindJSON(&inputKategori); err != nil {
		splitErr := helper.SplitErrorInformation(err)
		responseErr := helper.APIResponse(400, "input data required", gin.H{"errors": splitErr})
		c.JSON(400, responseErr)
		return
	}

	newKategori, err := h.service.SaveNewKategori(inputKategori)

	if err != nil {
		responseErr := helper.APIResponse(500, "internal server error", err.Error())
		c.JSON(500, responseErr)
		return
	}
	response := helper.APIResponse(201, "success create new kategori", newKategori)
	c.JSON(201, response)
}

func (h *kategoriHandler) UpdateKategoriByIDHandler(c *gin.Context) {
	id := c.Param("kategori_id")

	var updateKategoriInput entity.KategoriInput

	if err := c.ShouldBindJSON(&updateKategoriInput); err != nil {
		splitErr := helper.SplitErrorInformation(err)
		responseErr := helper.APIResponse(400, "input data required", gin.H{"error": splitErr})

		c.JSON(400, responseErr)
		return
	}

	kategori, err := h.service.UpdateKategoriByID(id, updateKategoriInput)

	if err != nil {
		responseErr := helper.APIResponse(500, "internal server error", gin.H{"error": err.Error()})

		c.JSON(500, responseErr)
		return
	}

	response := helper.APIResponse(200, "success update kategori", kategori)
	c.JSON(200, response)
}

func (h *kategoriHandler) DeleteKategoriByIDHandler(c *gin.Context) {
	id := c.Param("kategori_id")

	kategori, err := h.service.DeleteKategoriByID(id)

	if err != nil {
		responseErr := helper.APIFailure(500, "Internal server error", gin.H{"error": err.Error()})

		c.JSON(500, responseErr)
		return
	}
	response := helper.FormatDelete(200, kategori)
	c.JSON(200, response)
}
