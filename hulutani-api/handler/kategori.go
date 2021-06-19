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

// GetAllKategori godoc
// @Summary Get all kategori
// @Description Get All kategori
// @Tags kategori
// @Accept json
// @Produce json
// @Success 200 {object} helper.Response
// @Failure 500 {object} helper.Failure
// @Router /kategori [get]
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

// GetKategoriByID godoc
// @Summary Get Kategori by id
// @Description Get Kategori By ID
// @Tags kategori
// @Accept json
// @Produce json
// @Param kategori_id path string true "id kategori"
// @Success 200 {object} helper.Response
// @Failure 400 {object} helper.Failure
// @Failure 500 {object} helper.Failure
// @Router /kategori/{kategori_id} [get]
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

// CreateKategori godoc
// @Security Auth
// @Summary create new kategori
// @Description create new kategori
// @Tags kategori
// @Accept json
// @Produce json
// @Param kategori body entity.KategoriInput true "data kategori"
// @Success 201 {object} helper.Response
// @Failure 400 {object} helper.Failure
// @Failure 401 {object} helper.Failure
// @Failure 500 {object} helper.Failure
// @Router /kategori [post]
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

// UpdateKategori godoc
// @Security Auth
// @Summary update kategori
// @Description update kategori
// @Tags kategori
// @Accept json
// @Produce json
// @Param kategori_id path string true "kategori id"
// @Param kategori body entity.KategoriInput true "data kategori"
// @Success 200 {object} helper.Response
// @Failure 400 {object} helper.Failure
// @Failure 401 {object} helper.Failure
// @Failure 500 {object} helper.Failure
// @Router /kategori/{kategori_id} [put]
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

// DeleteKategori godoc
// @Security Auth
// @Summary Delete kategori by id
// @Description Delete kategori by id
// @Tags kategori
// @Accept json
// @Produce json
// @Param kategori_id path string true "kategori id"
// @Success 200 {object} helper.Delete
// @Failure 400 {object} helper.Failure
// @Failure 401 {object} helper.Failure
// @Router /kategori/{kategori_id} [delete]
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
