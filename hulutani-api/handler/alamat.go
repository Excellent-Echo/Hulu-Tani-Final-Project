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

func (h *alamatHandler) ShowAlamatByPelangganId(c *gin.Context) {
	id := int(c.MustGet("currentUser").(int))
	idPelanggan := strconv.Itoa(id)

	alamat, err := h.alamatService.GetAlamatByPelangganId(idPelanggan)

	if err != nil {
		responseErr := helper.APIResponse(500, "internal server error", gin.H{"error": err.Error()})

		c.JSON(500, responseErr)
	}

	response := helper.APIResponse(200, "success get alamat by pelanggan id", alamat)
	c.JSON(200, response)
}

func (h *alamatHandler) ShowAlamatByAlamatId(c *gin.Context) {
	id := c.Param("alamat_id")

	alamat, err := h.alamatService.GetAlamatByAlamatId(id)

	if err != nil {
		responseErr := helper.APIResponse(500, "internal server error", gin.H{"error": err.Error()})

		c.JSON(500, responseErr)
	}

	response := helper.APIResponse(200, "success get alamat by alamat id", alamat)
	c.JSON(200, response)
}

func (h *alamatHandler) CreateAlamatHandler(c *gin.Context) {
	id := int(c.MustGet("currentUser").(int))
	var inputAlamat entity.AlamatInput

	if err := c.ShouldBindJSON(&inputAlamat); err != nil {
		splitErr := helper.SplitErrorInformation(err)
		responseErr := helper.APIResponse(400, "input data required", gin.H{"errors": splitErr})
		c.JSON(400, responseErr)
		return
	}

	newAlamat, err := h.alamatService.SaveNewAlamat(id, inputAlamat)

	if err != nil {
		responseErr := helper.APIResponse(500, "internal server error", err.Error())
		c.JSON(500, responseErr)
		return
	}
	response := helper.APIResponse(201, "success create new produk", newAlamat)
	c.JSON(201, response)
}

func (h *alamatHandler) UpdateAlamatByIdHandler(c *gin.Context) {
	id := c.Param("alamat_id")

	var updateAlamatInput entity.AlamatInput

	if err := c.ShouldBindJSON(&updateAlamatInput); err != nil {
		splitErr := helper.SplitErrorInformation(err)
		responseErr := helper.APIResponse(400, "input data required", gin.H{"error": splitErr})

		c.JSON(400, responseErr)
		return
	}

	alamat, err := h.alamatService.UpdateAlamatByAlamatId(id, updateAlamatInput)

	if err != nil {
		responseErr := helper.APIResponse(500, "internal server error", gin.H{"error": err.Error()})

		c.JSON(500, responseErr)
		return
	}

	response := helper.APIResponse(200, "success update alamat by id", alamat)
	c.JSON(200, response)
}

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
