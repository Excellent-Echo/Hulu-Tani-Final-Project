package handler

import (
	"hulutani-api/entity"
	"hulutani-api/helper"
	"hulutani-api/layer/alamat"
	"strconv"

	"github.com/gin-gonic/gin"
)

type alamatHandler struct {
	alamatService alamat.Service
}

func NewAlamatHandler(alamatService alamat.Service) *alamatHandler {
	return &alamatHandler{alamatService}
}

// GetAllAlamat godoc
// @Security Auth
// @Summary Get All Alamat
// @Description Get All Alamat
// @Tags Alamat
// @Accept json
// @Produce json
// @Success 200 {object} helper.Response
// @Failure 401 {object} helper.Failure
// @Failure 500 {object} helper.Failure
// @Router /alamat [get]
func (h *alamatHandler) ShowAlamatByPelangganId(c *gin.Context) {
	id := int(c.MustGet("currentUser").(int))
	idPelanggan := strconv.Itoa(id)

	alamat, err := h.alamatService.GetAlamatByPelangganId(idPelanggan)

	if err != nil {
		responseErr := helper.APIFailure(500, "internal server error", gin.H{"error": err.Error()})

		c.JSON(500, responseErr)
	}

	response := helper.APIResponse(200, "success get alamat by pelanggan id", alamat)
	c.JSON(200, response)
}

// GetAlamatByID godoc
// @Security Auth
// @Summary Get Alamat By ID
// @Description Get Alamat By ID
// @Tags Alamat
// @Accept json
// @Produce json
// @param alamat_id path string true "id alamat"
// @Success 200 {object} helper.Response
// @Failure 401 {object} helper.Failure
// @Failure 500 {object} helper.Failure
// @Router /alamat/{alamat_id} [get]
func (h *alamatHandler) ShowAlamatByAlamatId(c *gin.Context) {
	id := c.Param("alamat_id")

	alamat, err := h.alamatService.GetAlamatByAlamatId(id)

	if err != nil {
		responseErr := helper.APIFailure(500, "internal server error", gin.H{"error": err.Error()})

		c.JSON(500, responseErr)
	}

	response := helper.APIResponse(200, "success get alamat by alamat id", alamat)
	c.JSON(200, response)
}

// CreateAlamat godoc
// @Security Auth
// @Summary Create New Alamat
// @Description Create New Alamat
// @Tags Alamat
// @Accept json
// @Produce json
// @Param alamat body entity.AlamatInput true "data alamat"
// @Success 200 {object} helper.Response
// @Success 400 {object} helper.Failure
// @Failure 401 {object} helper.Failure
// @Failure 500 {object} helper.Failure
// @Router /alamat [post]
func (h *alamatHandler) CreateAlamatHandler(c *gin.Context) {
	id := int(c.MustGet("currentUser").(int))
	var inputAlamat entity.AlamatInput

	if err := c.ShouldBindJSON(&inputAlamat); err != nil {
		splitErr := helper.SplitErrorInformation(err)
		responseErr := helper.APIFailure(400, "input data required", gin.H{"errors": splitErr})
		c.JSON(400, responseErr)
		return
	}

	newAlamat, err := h.alamatService.SaveNewAlamat(id, inputAlamat)

	if err != nil {
		responseErr := helper.APIFailure(500, "internal server error", err.Error())
		c.JSON(500, responseErr)
		return
	}
	response := helper.APIResponse(201, "success create new produk", newAlamat)
	c.JSON(201, response)
}

// UpdateAlamatByID godoc
// @Security Auth
// @Summary Update Alamat By ID
// @Description update Alamat By ID
// @Tags Alamat
// @Accept json
// @Produce json
// @Param alamat_id path string true "id alamat"
// @Param alamat body entity.AlamatInput true "data update alamat"
// @Success 200 {object} helper.Response
// @Failure 400 {object} helper.Failure
// @Failure 401 {object} helper.Failure
// @Failure 500 {object} helper.Failure
// @Router /alamat/{alamat_id} [put]
func (h *alamatHandler) UpdateAlamatByIdHandler(c *gin.Context) {
	id := c.Param("alamat_id")

	var updateAlamatInput entity.AlamatInput

	if err := c.ShouldBindJSON(&updateAlamatInput); err != nil {
		splitErr := helper.SplitErrorInformation(err)
		responseErr := helper.APIFailure(400, "input data required", gin.H{"error": splitErr})

		c.JSON(400, responseErr)
		return
	}

	alamat, err := h.alamatService.UpdateAlamatByAlamatId(id, updateAlamatInput)

	if err != nil {
		responseErr := helper.APIFailure(500, "internal server error", gin.H{"error": err.Error()})

		c.JSON(500, responseErr)
		return
	}

	response := helper.APIResponse(200, "success update alamat by id", alamat)
	c.JSON(200, response)
}

// DeleteAlamatByID godoc
// @Security Auth
// @Summary Delete Alamat By ID
// @Description Delete Alamat By ID
// @Tags Alamat
// @Accept json
// @Produce json
// @Param alamat_id path string true "id alamat"
// @Success 200 {object} helper.Delete
// @Failure 500 {object} helper.Failure
// @Router /alamat/{alamat_id} [delete]
func (h *alamatHandler) DeleteAlamatByIdHandler(c *gin.Context) {

	id := c.Param("alamat_id")

	alamat, err := h.alamatService.DeleteAlamatByAlamatId(id)

	if err != nil {
		responseErr := helper.APIFailure(500, "internal server error", gin.H{"error": err.Error()})

		c.JSON(500, responseErr)
		return
	}

	response := helper.FormatDelete(200, alamat)
	c.JSON(200, response)
}
