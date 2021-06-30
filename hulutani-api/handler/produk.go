package handler

import (
	"hulutani-api/entity"
	"hulutani-api/helper"
	"hulutani-api/layer/produk"
	"strconv"

	"github.com/gin-gonic/gin"
)

type produkHandler struct {
	service produk.Service
}

func NewProdukHandler(service produk.Service) *produkHandler {
	return &produkHandler{service}
}

// GetAllProduk godoc
// @Summary Get all produk
// @Description Get All produk
// @Tags produk
// @Accept json
// @Produce json
// @Success 200 {object} helper.Response
// @Failure 500 {object} helper.Failure
// @Router /produk [get]
func (h *produkHandler) ShowAllProduksHandler(c *gin.Context) {
	produk, err := h.service.GetAllProduk()

	if err != nil {
		responseErr := helper.APIFailure(500, "internal server error", err.Error())
		c.JSON(500, responseErr)
		return
	}

	response := helper.APIResponse(200, "success get all produk data", produk)

	c.JSON(200, response)
}

// GetProdukByName godoc
// @Summary Get produk by name
// @Description Get produk by name
// @Tags produk
// @Accept json
// @Produce json
// @Param nama_produk path string true "nama_produk"
// @Success 200 {object} helper.Response
// @Failure 400 {object} helper.Failure
// @Failure 500 {object} helper.Failure
// @Router /produk/nama/{nama_produk} [get]
func (h *produkHandler) ShowProdukByNameHandler(c *gin.Context) {
	nama := c.Param("nama_produk")

	produk, err := h.service.GetProdukByName(nama)
	if err != nil {
		responseErr := helper.APIFailure(500, "internal server error", gin.H{"error": err.Error()})

		c.JSON(500, responseErr)
		return
	}
	response := helper.APIResponse(200, "success get produk", produk)
	c.JSON(200, response)
}

// GetProdukById godoc
// @Summary Get produk by id
// @Description Get produk by id
// @Tags produk
// @Accept json
// @Produce json
// @Param produk_id path string true "produk_id"
// @Success 200 {object} helper.Response
// @Failure 400 {object} helper.Failure
// @Failure 500 {object} helper.Failure
// @Router /produk/{produk_id} [get]
func (h *produkHandler) ShowProdukByIdHandler(c *gin.Context) {
	id := c.Param("produk_id")

	produk, err := h.service.GetProdukById(id)
	if err != nil {
		responseErr := helper.APIFailure(500, "internal server error", gin.H{"error": err.Error()})

		c.JSON(500, responseErr)
		return
	}
	response := helper.APIResponse(200, "success get produk", produk)
	c.JSON(200, response)
}

// GetProdukByHarga godoc
// @Summary Get produk by harga
// @Description Get produk by harga
// @Tags produk
// @Accept multipart/form-data
// @Produce json
// @Param harga formData entity.Harga true "filter harga"
// @Success 200 {object} helper.Response
// @Failure 400 {object} helper.Failure
// @Failure 500 {object} helper.Failure
// @Router /produk/harga [post]
func (h *produkHandler) ShowProdukByHargaHandler(c *gin.Context) {
	dari, _ := strconv.Atoi(c.PostForm("dari"))
	sampai, _ := strconv.Atoi(c.PostForm("sampai"))

	var harga = entity.Harga{
		Dari:   dari,
		Sampai: sampai,
	}

	produk, err := h.service.GetProdukByHarga(harga)
	if err != nil {
		responseErr := helper.APIFailure(500, "internal server error", gin.H{"error": err.Error()})

		c.JSON(500, responseErr)
		return
	}
	response := helper.APIResponse(200, "success get produk", produk)
	c.JSON(200, response)
}

// CreateProduk godoc
// @Security Auth
// @Summary create new produk
// @Description create new produk
// @Tags produk
// @Accept json
// @Produce json
// @Param produk body entity.ProdukInput true "data produk"
// @Success 201 {object} helper.Response
// @Failure 400 {object} helper.Failure
// @Failure 401 {object} helper.Failure
// @Failure 500 {object} helper.Failure
// @Router /produk [post]
func (h *produkHandler) CreateProdukHandler(c *gin.Context) {

	var inpotProduk entity.ProdukInput

	if err := c.ShouldBindJSON(&inpotProduk); err != nil {
		splitErr := helper.SplitErrorInformation(err)
		responseErr := helper.APIFailure(400, "input data required", gin.H{"errors": splitErr})
		c.JSON(400, responseErr)
		return
	}

	newProduk, err := h.service.SaveNewProduk(inpotProduk)

	if err != nil {
		responseErr := helper.APIFailure(500, "internal server error", err.Error())
		c.JSON(500, responseErr)
		return
	}
	response := helper.APIResponse(201, "success create new produk", newProduk)
	c.JSON(201, response)
}

// UpdateProduk godoc
// @Security Auth
// @Summary update produk
// @Description update produk
// @Tags produk
// @Accept json
// @Produce json
// @Param produk_id path string true "produk id"
// @Param produk body entity.ProdukInput true "data produk"
// @Success 200 {object} helper.Response
// @Failure 400 {object} helper.Failure
// @Failure 401 {object} helper.Failure
// @Failure 500 {object} helper.Failure
// @Router /produk/{produk_id} [put]
func (h *produkHandler) UpdateProdukByIDHandler(c *gin.Context) {
	id := c.Param("produk_id")

	var updateProdukInput entity.ProdukInput

	if err := c.ShouldBindJSON(&updateProdukInput); err != nil {
		splitErr := helper.SplitErrorInformation(err)
		responseErr := helper.APIFailure(400, "input data required", gin.H{"error": splitErr})

		c.JSON(400, responseErr)
		return
	}

	produk, err := h.service.UpdateProdukByID(id, updateProdukInput)

	if err != nil {
		responseErr := helper.APIFailure(500, "internal server error", gin.H{"error": err.Error()})

		c.JSON(500, responseErr)
		return
	}

	response := helper.APIResponse(200, "success update produk", produk)
	c.JSON(200, response)
}

// DeleteProduk godoc
// @Security Auth
// @Summary Delete produk by id
// @Description Delete produk by id
// @Tags produk
// @Accept json
// @Produce json
// @Param produk_id path string true "produk id"
// @Success 200 {object} helper.Delete
// @Failure 400 {object} helper.Failure
// @Failure 401 {object} helper.Failure
// @Router /produk/{produk_id} [delete]
func (h *produkHandler) DeleteProdukByIDHandler(c *gin.Context) {
	id := c.Param("produk_id")

	produk, err := h.service.DeleteProdukByID(id)

	if err != nil {
		responseErr := helper.APIFailure(500, "Internal server error", gin.H{"error": err.Error()})

		c.JSON(500, responseErr)
		return
	}
	response := helper.FormatDelete(200, produk)
	c.JSON(200, response)
}
