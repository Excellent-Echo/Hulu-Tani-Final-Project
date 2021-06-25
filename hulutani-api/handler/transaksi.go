package handler

import (
	"hulutani-api/entity"
	"hulutani-api/helper"
	"hulutani-api/layer/keranjang"
	"hulutani-api/layer/transaksi"
	"strconv"

	"github.com/gin-gonic/gin"
)

type transaksiHandler struct {
	service          transaksi.Service
	keranjangService keranjang.Service
}

func NewTransaksiHandler(service transaksi.Service, keranjangService keranjang.Service) *transaksiHandler {
	return &transaksiHandler{service, keranjangService}
}

func (h *transaksiHandler) ShowAllTransaksi(c *gin.Context) {
	id := c.MustGet("currentUser").(int)
	idPelanggan := strconv.Itoa(id)

	transaksi, err := h.service.GetAllTransaksi(idPelanggan)

	if err != nil {
		responseErr := helper.APIResponse(500, "internal server error", err.Error())
		c.JSON(500, responseErr)
		return
	}

	response := helper.APIResponse(200, "success get all Transaksi data", transaksi)

	c.JSON(200, response)
}

func (h *transaksiHandler) CreateTransaksiHandler(c *gin.Context) {
	id := c.MustGet("currentUser").(int)

	var inputTransaksi entity.TransaksiInput

	if err := c.ShouldBindJSON(&inputTransaksi); err != nil {
		splitErr := helper.SplitErrorInformation(err)
		responseErr := helper.APIResponse(400, "input data required", gin.H{"errors": splitErr})
		c.JSON(400, responseErr)
		return
	}

	newTransaksi, err := h.service.SaveNewTransaksi(id, inputTransaksi)

	if err != nil {
		responseErr := helper.APIResponse(500, "internal server error", err.Error())
		c.JSON(500, responseErr)
		return
	}
	response := helper.APIResponse(201, "success create new transaksi", newTransaksi)
	c.JSON(201, response)
}

func (h *transaksiHandler) ShowTransaksiByKode(c *gin.Context) {
	kode := c.Param("kode_transaksi")

	transaksi, err := h.service.GetTransaksiByKode(kode)

	if err != nil {
		responseErr := helper.APIResponse(500, "internal server error", err.Error())
		c.JSON(500, responseErr)
		return
	}

	response := helper.APIResponse(200, "success get Transaksi data", transaksi)

	c.JSON(200, response)
}

func (h *transaksiHandler) UpdateTransaksiByKodeHandler(c *gin.Context) {
	kode := c.Param("kode_transaksi")

	var updateTransaksiInput entity.TransaksiInput

	if err := c.ShouldBindJSON(&updateTransaksiInput); err != nil {
		splitErr := helper.SplitErrorInformation(err)
		responseErr := helper.APIResponse(400, "input data required", gin.H{"error": splitErr})

		c.JSON(400, responseErr)
		return
	}

	transaksi, err := h.service.UpdateKategoriByKode(kode, updateTransaksiInput)

	if err != nil {
		responseErr := helper.APIResponse(500, "internal server error", gin.H{"error": err.Error()})

		c.JSON(500, responseErr)
		return
	}

	response := helper.APIResponse(200, "success update transaksi", transaksi)
	c.JSON(200, response)
}
