package handler

import (
	"hulutani-api/auth"
	"hulutani-api/entity"
	"hulutani-api/helper"
	"hulutani-api/layer/pelanggan"
	"strconv"

	"github.com/gin-gonic/gin"
)

type pelangganHandler struct {
	service     pelanggan.Service
	authService auth.Service
}

func NewHandler(service pelanggan.Service, authService auth.Service) *pelangganHandler {
	return &pelangganHandler{service, authService}
}

func (h *pelangganHandler) GetPelangganByIDHandler(c *gin.Context) {
	id := int(c.MustGet("currentUser").(int))
	idPelanggan := strconv.Itoa(id)

	user, err := h.service.GetPelangganById(idPelanggan)
	if err != nil {
		responseError := helper.APIResponse(401, "status unauthorize", gin.H{"error": err.Error()})

		c.JSON(400, responseError)
		return
	}

	response := helper.APIResponse(200, "success get user by ID", user)
	c.JSON(200, response)
}

func (h *pelangganHandler) CreatePelangganHandler(c *gin.Context) {
	var pelangganInput entity.PelangganInput

	if err := c.ShouldBindJSON(&pelangganInput); err != nil {
		splitError := helper.SplitErrorInformation(err)
		responseError := helper.APIResponse(400, "input data required", gin.H{"errors": splitError})

		c.JSON(400, responseError)
		return
	}

	newPelanggan, err := h.service.SaveNewPelanggan(pelangganInput)

	if err != nil {
		responseError := helper.APIResponse(500, "internal server error", gin.H{"error": err.Error()})

		c.JSON(500, responseError)
		return
	}

	if newPelanggan.ID == 0 {
		c.JSON(400, gin.H{"errors": "email sudah terdaftar!"})
		return

	}

	response := helper.APIResponse(201, "success create new User", newPelanggan)
	c.JSON(201, response)
}

func (h *pelangganHandler) LoginPelangganHandler(c *gin.Context) {
	var inputLoginPelanggan entity.PelangganLogin

	if err := c.ShouldBindJSON(&inputLoginPelanggan); err != nil {
		splitError := helper.SplitErrorInformation(err)
		responseError := helper.APIResponse(400, "input data required", gin.H{"errors": splitError})

		c.JSON(400, responseError)
		return
	}

	pelanggan, err := h.service.LoginPelanggan(inputLoginPelanggan)

	if err != nil {
		responseError := helper.APIResponse(401, "input data error", gin.H{"errors": err})

		c.JSON(401, responseError)
		return
	}

	token, err := h.authService.GenerateToken(pelanggan.ID)
	if err != nil {
		responseError := helper.APIResponse(500, "internal server error", gin.H{"errors": err})

		c.JSON(401, responseError)
		return
	}
	response := helper.APIResponse(200, "success login user", gin.H{"Authorization": token})
	c.JSON(200, response)
}
