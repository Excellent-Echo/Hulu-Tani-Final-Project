package handler

import (
	"hulutani-api/entity"
	"hulutani-api/helper"
	"hulutani-api/layer/keranjang"
	"strconv"

	"github.com/gin-gonic/gin"
)

type keranjangHandler struct {
	service keranjang.Service
}

func NewKeranjangHandler(service keranjang.Service) *keranjangHandler {
	return &keranjangHandler{service}
}

func (h *keranjangHandler) ShowKeranjangByid(c *gin.Context) {
	id := c.MustGet("currentUser").(int)
	kodeKeranjang := c.Param("kode_keranjang")

	idUser := strconv.Itoa(id)

	keranjang, err := h.service.GetKeranjangByIdPelanggan(idUser, kodeKeranjang)

	if err != nil {
		responseErr := helper.APIFailure(500, "internal server error", gin.H{"error": err.Error()})
		c.JSON(500, responseErr)
	}

	response := helper.APIResponse(200, "success get data keranjang", keranjang)
	c.JSON(200, response)
}

func (h *keranjangHandler) CreateKeranjangHandler(c *gin.Context) {
	idPelanggan := c.MustGet("currentUser").(int)
	var inputKeranjang entity.KeranjangInput

	if err := c.ShouldBindJSON(&inputKeranjang); err != nil {
		splitErr := helper.SplitErrorInformation(err)
		responseErr := helper.APIResponse(400, "input data required", gin.H{"errors": splitErr})
		c.JSON(400, responseErr)
		return
	}

	newKeranjang, err := h.service.SaveNewKeranjang(idPelanggan, inputKeranjang)

	if err != nil {
		responseErr := helper.APIResponse(500, "internal server error", err.Error())
		c.JSON(500, responseErr)
		return
	}
	response := helper.APIResponse(201, "success create new keranjang", newKeranjang)
	c.JSON(201, response)
}

func (h *keranjangHandler) DeleteKeranjangHandler(c *gin.Context) {
	kode_keranjang := c.Param("kode_keranjang")

	keranjang, err := h.service.DeleteKeranjang(kode_keranjang)

	if err != nil {
		responseErr := helper.APIFailure(500, "Internal server error", gin.H{"error": err.Error()})

		c.JSON(500, responseErr)
		return
	}
	response := helper.FormatDelete(200, keranjang)
	c.JSON(200, response)
}
