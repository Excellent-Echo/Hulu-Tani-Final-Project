package handler

import (
	"hulutani-api/entity"
	"hulutani-api/helper"
	"hulutani-api/layer/alamat"

	"github.com/gin-gonic/gin"
)


type alamatHandler struct {
	alamatService alamat.Service
}

func NewAlamatHandler(alamatService alamat.Service) *alamatHandler {
	return &alamatHandler{alamatService}
}

func (h *alamatHandler) ShowAlamatByPelangganId(c *gin.Context) {
	pelanggan_id := c.Param("pelanggan_id")

	alamat, err := h.alamatService.GetAlamatByPelangganId(pelanggan_id)

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

	var inputAlamat entity.AlamatInput

	if err := c.ShouldBindJSON(&inputAlamat); err != nil {
		splitErr := helper.SplitErrorInformation(err)
		responseErr := helper.APIResponse(400, "input data required", gin.H{"errors": splitErr})
		c.JSON(400, responseErr)
		return
	}

	newAlamat, err := h.alamatService.SaveNewAlamat(inputAlamat)

	if err != nil {
		responseErr := helper.APIResponse(500, "internal server error", err.Error())
		c.JSON(500, responseErr)
		return
	}
	response := helper.APIResponse(201, "success create new produk", newAlamat)
	c.JSON(201, response)
}