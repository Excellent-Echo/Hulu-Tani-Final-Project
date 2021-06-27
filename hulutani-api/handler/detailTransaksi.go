package handler

import (
	"hulutani-api/entity"
	"hulutani-api/helper"
	detailtransaksi "hulutani-api/layer/detailTransaksi"

	"github.com/gin-gonic/gin"
)

type detailHandler struct {
	service detailtransaksi.Service
}

func NewDetailHandler(service detailtransaksi.Service) *detailHandler {
	return &detailHandler{service}
}

func (h *detailHandler) CreateDetailTransaksiHandler(c *gin.Context) {

	var input entity.DetailTransaksiInput

	if err := c.ShouldBindJSON(&input); err != nil {
		splitErr := helper.SplitErrorInformation(err)
		responseErr := helper.APIResponse(400, "input data required", gin.H{"errors": splitErr})
		c.JSON(400, responseErr)
		return
	}

	newDetail, err := h.service.SaveNewDetail(input)

	if err != nil {
		responseErr := helper.APIResponse(500, "internal server error", err.Error())
		c.JSON(500, responseErr)
		return
	}
	response := helper.APIResponse(201, "success create new Detail Transaksi", newDetail)
	c.JSON(201, response)
}

func (h *detailHandler) ShowDetailByKodeTransaksi(c *gin.Context) {
	kode := c.Param("kode_transaksi")

	detail, err := h.service.ShowDetailByKodeTransaksi(kode)

	if err != nil {
		responseErr := helper.APIFailure(500, "internal server error", err.Error())
		c.JSON(500, responseErr)
		return
	}

	response := helper.APIResponse(201, "success get detail Transaksi", detail)
	c.JSON(201, response)
}
