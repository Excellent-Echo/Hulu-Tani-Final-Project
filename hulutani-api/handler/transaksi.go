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

// GetAllTransaksi godoc
// @Security Auth
// @Summary Get All Transaksi
// @Description Get All Transaksi
// @Tags Transaksi
// @Accept json
// @Produce json
// @Success 200 {object} helper.Response
// @Failure 401 {object} helper.Failure
// @Failure 500 {object} helper.Failure
// @Router /transaksi/all [get]
func (h *transaksiHandler) ShowAllTransaksi(c *gin.Context) {

	transaksi, err := h.service.GetAllTransaki()

	if err != nil {
		responseErr := helper.APIFailure(500, "internal server error", err.Error())
		c.JSON(500, responseErr)
		return
	}

	response := helper.APIResponse(200, "success get all Transaksi", transaksi)

	c.JSON(200, response)
}

// GetAllTransaksiByID godoc
// @Security Auth
// @Summary Get All Transaksi By ID User
// @Description Get All Transaksi ID User
// @Tags Transaksi
// @Accept json
// @Produce json
// @Success 200 {object} helper.Response
// @Failure 401 {object} helper.Failure
// @Failure 500 {object} helper.Failure
// @Router /transaksi [get]
func (h *transaksiHandler) ShowAllTransaksiByIdUser(c *gin.Context) {
	id := c.MustGet("currentUser").(int)
	idPelanggan := strconv.Itoa(id)

	transaksi, err := h.service.GetAllTransaksiById(idPelanggan)

	if err != nil {
		responseErr := helper.APIFailure(500, "internal server error", err.Error())
		c.JSON(500, responseErr)
		return
	}

	response := helper.APIResponse(200, "success get all Transaksi data", transaksi)

	c.JSON(200, response)
}

// CreateTransaksi godoc
// @Security Auth
// @Summary Create new Transaksi
// @Description Create new Transaksi
// @Tags Transaksi
// @Accept json
// @Produce json
// @Param transaksi body entity.TransaksiInput true "Data Transaksi"
// @Success 200 {object} helper.Response
// @Failure 401 {object} helper.Failure
// @Failure 400 {object} helper.Failure
// @Failure 500 {object} helper.Failure
// @Router /transaksi [post]
func (h *transaksiHandler) CreateTransaksiHandler(c *gin.Context) {
	id := c.MustGet("currentUser").(int)

	var inputTransaksi entity.TransaksiInput

	if err := c.ShouldBindJSON(&inputTransaksi); err != nil {
		splitErr := helper.SplitErrorInformation(err)
		responseErr := helper.APIFailure(400, "input data required", gin.H{"errors": splitErr})
		c.JSON(400, responseErr)
		return
	}

	newTransaksi, err := h.service.SaveNewTransaksi(id, inputTransaksi)

	if err != nil {
		responseErr := helper.APIFailure(500, "internal server error", err.Error())
		c.JSON(500, responseErr)
		return
	}
	response := helper.APIResponse(201, "success create new transaksi", newTransaksi)
	c.JSON(201, response)
}

// CreateProdukTransaksi godoc
// @Security Auth
// @Summary Create new Produk Transaksi
// @Description Create New Produk Transaksi
// @Tags Transaksi
// @Accept json
// @Produce json
// @Param produk-transaksi body entity.ProdukTransaksi true "data produk transaksi"
// @Success 200 {object} helper.Response
// @Failure 401 {object} helper.Failure
// @Failure 400 {object} helper.Failure
// @Failure 500 {object} helper.Failure
// @Router /produk-transaksi [post]
func (h *transaksiHandler) CreateProdukTransaksiHandler(c *gin.Context) {

	var inputProdukTransaksi entity.ProdukTransaksi

	if err := c.ShouldBindJSON(&inputProdukTransaksi); err != nil {
		splitErr := helper.SplitErrorInformation(err)
		responseErr := helper.APIFailure(400, "input data required", gin.H{"errors": splitErr})
		c.JSON(400, responseErr)
		return
	}

	newTransaksi, err := h.service.SaveNewProdukTransaksi(inputProdukTransaksi)

	if err != nil {
		responseErr := helper.APIFailure(500, "internal server error", err.Error())
		c.JSON(500, responseErr)
		return
	}
	response := helper.APIResponse(201, "success create new produk transaksi", newTransaksi)
	c.JSON(201, response)
}

// GetTransaksiByKode godoc
// @Security Auth
// @Summary Get Transaksi By Kode
// @Description Get Transaksi By Kode
// @Tags Transaksi
// @Accept json
// @Produce json
// @Param kode_transaksi path string true "kode transaksi"
// @Success 200 {object} helper.Response
// @Failure 401 {object} helper.Failure
// @Failure 500 {object} helper.Failure
// @Router /transaksi/{kode_transaksi} [get]
func (h *transaksiHandler) ShowTransaksiByKode(c *gin.Context) {
	kode := c.Param("kode_transaksi")

	transaksi, err := h.service.GetTransaksiByKode(kode)

	if err != nil {
		responseErr := helper.APIFailure(500, "internal server error", err.Error())
		c.JSON(500, responseErr)
		return
	}

	response := helper.APIResponse(200, "success get Transaksi data", transaksi)

	c.JSON(200, response)
}

// UpdateStatusByKode godoc
// @Security Auth
// @Summary Update status by kode transaksi
// @Description update status transaksi by kode transaksi
// @Tags Transaksi
// @Accept json
// @Produce json
// @Param kode_transaksi path string true "kode transaksi"
// @Param status body entity.UpdateStatus true "update status"
// @Success 200 {object} helper.Response
// @Failure 401 {object} helper.Failure
// @Failure 500 {object} helper.Failure
// @Router /transaksi/{kode_transaksi} [put]
func (h *transaksiHandler) UpdateTransaksiByKodeHandler(c *gin.Context) {
	kode := c.Param("kode_transaksi")

	var updateTransaksiInput entity.UpdateStatus

	if err := c.ShouldBindJSON(&updateTransaksiInput); err != nil {
		splitErr := helper.SplitErrorInformation(err)
		responseErr := helper.APIFailure(400, "input data required", gin.H{"error": splitErr})

		c.JSON(400, responseErr)
		return
	}

	transaksi, err := h.service.UpdateStatusByKode(kode, updateTransaksiInput)

	if err != nil {
		responseErr := helper.APIFailure(500, "internal server error", gin.H{"error": err.Error()})

		c.JSON(500, responseErr)
		return
	}

	response := helper.APIResponse(200, "success update transaksi", transaksi)
	c.JSON(200, response)
}

// UpdateBuktiTransferByKode godoc
// @Security Auth
// @Summary Update bukti transfer by kode transaksi
// @Description update bukti transfer by kode transaksi
// @Tags Transaksi
// @Accept json
// @Produce json
// @Param kode_transaksi path string true "kode transaksi"
// @Param bukti body entity.UpdateStatus true "update bukti transfer"
// @Success 200 {object} helper.Response
// @Failure 401 {object} helper.Failure
// @Failure 500 {object} helper.Failure
// @Router /upload-bukti-transfer/{kode_transaksi} [put]
func (h *transaksiHandler) UpdateBuktiTransferByKodeHandler(c *gin.Context) {
	kode := c.Param("kode_transaksi")

	var updateTransaksiInput entity.UploadBuktiTransfer

	if err := c.ShouldBindJSON(&updateTransaksiInput); err != nil {
		splitErr := helper.SplitErrorInformation(err)
		responseErr := helper.APIFailure(400, "input data required", gin.H{"error": splitErr})

		c.JSON(400, responseErr)
		return
	}

	transaksi, err := h.service.UpdateBuktiTransfer(kode, updateTransaksiInput)

	if err != nil {
		responseErr := helper.APIFailure(500, "internal server error", gin.H{"error": err.Error()})

		c.JSON(500, responseErr)
		return
	}

	response := helper.APIResponse(200, "success update transaksi", transaksi)
	c.JSON(200, response)
}
