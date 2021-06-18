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

func (h *produkHandler) ShowAllProduksHandler(c *gin.Context) {
	produk, err := h.service.GetAllProduk()

	if err != nil {
		responseErr := helper.APIResponse(500, "internal server error", err.Error())
		c.JSON(500, responseErr)
		return
	}

	response := helper.APIResponse(200, "success get all produk data", produk)

	c.JSON(200, response)
}

func (h *produkHandler) ShowProdukByNameHandler(c *gin.Context) {
	nama := c.Param("nama_produk")

	produk, err := h.service.GetProdukByName(nama)
	if err != nil {
		responseErr := helper.APIResponse(500, "internal server error", gin.H{"error": err.Error()})

		c.JSON(500, responseErr)
		return
	}
	response := helper.APIResponse(200, "success get produk", produk)
	c.JSON(200, response)
}

func (h *produkHandler) ShowProdukByIdHandler(c *gin.Context) {
	id := c.Param("produk_id")

	produk, err := h.service.GetProdukById(id)
	if err != nil {
		responseErr := helper.APIResponse(500, "internal server error", gin.H{"error": err.Error()})

		c.JSON(500, responseErr)
		return
	}
	response := helper.APIResponse(200, "success get produk", produk)
	c.JSON(200, response)
}

func (h *produkHandler) ShowProdukByHargaHandler(c *gin.Context) {
	dari, _ := strconv.Atoi(c.PostForm("dari"))
	sampai, _ := strconv.Atoi(c.PostForm("sampai"))

	var harga = entity.Harga{
		Dari:   dari,
		Sampai: sampai,
	}

	produk, err := h.service.GetProdukByHarga(harga)
	if err != nil {
		responseErr := helper.APIResponse(500, "internal server error", gin.H{"error": err.Error()})

		c.JSON(500, responseErr)
		return
	}
	response := helper.APIResponse(200, "success get produk", produk)
	c.JSON(200, response)
}

func (h *produkHandler) CreateProdukHandler(c *gin.Context) {

	var inpotProduk entity.ProdukInput

	if err := c.ShouldBindJSON(&inpotProduk); err != nil {
		splitErr := helper.SplitErrorInformation(err)
		responseErr := helper.APIResponse(400, "input data required", gin.H{"errors": splitErr})
		c.JSON(400, responseErr)
		return
	}

	newProduk, err := h.service.SaveNewProduk(inpotProduk)

	if err != nil {
		responseErr := helper.APIResponse(500, "internal server error", err.Error())
		c.JSON(500, responseErr)
		return
	}
	response := helper.APIResponse(201, "success create new produk", newProduk)
	c.JSON(201, response)
}

func (h *produkHandler) UpdateProdukByIDHandler(c *gin.Context) {
	id := c.Param("produk_id")

	var updateProdukInput entity.ProdukInput

	if err := c.ShouldBindJSON(&updateProdukInput); err != nil {
		splitErr := helper.SplitErrorInformation(err)
		responseErr := helper.APIResponse(400, "input data required", gin.H{"error": splitErr})

		c.JSON(400, responseErr)
		return
	}

	produk, err := h.service.UpdateProdukByID(id, updateProdukInput)

	if err != nil {
		responseErr := helper.APIResponse(500, "internal server error", gin.H{"error": err.Error()})

		c.JSON(500, responseErr)
		return
	}

	response := helper.APIResponse(200, "success update produk", produk)
	c.JSON(200, response)
}

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
