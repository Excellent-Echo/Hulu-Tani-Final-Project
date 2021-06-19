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

// GetPelangganById godoc
// @Security Auth
// @Summary Get Pelanggan by ID
// @Description Get a pelanggan by pelanggan ID
// @Tags pelanggan
// @Accept json
// @Produce json
// @success 200 {object} helper.Response
// @Failure 400 {object} helper.Failure
// @Failure 401 {object} helper.Failure
// @Failure 500 {object} helper.Failure
// @Router /user [get]
func (h *pelangganHandler) GetPelangganByIDHandler(c *gin.Context) {
	id := int(c.MustGet("currentUser").(int))
	idPelanggan := strconv.Itoa(id)

	user, err := h.service.GetPelangganById(idPelanggan)
	if err != nil {
		responseError := helper.APIFailure(401, "status unauthorize", gin.H{"error": err.Error()})

		c.JSON(400, responseError)
		return
	}

	response := helper.APIResponse(200, "success get user by ID", user)
	c.JSON(200, response)
}

// CreatePelanggan godoc
// @Summary Create new pelanggan account
// @Description Create new pelanggan account
// @Tags pelanggan
// @Accept json
// @Produce json
// @Param pelanggan body entity.PelangganInput true "create pelanggan"
// @Success 201 {object} helper.Response
// @Failure 400 {object} helper.Failure
// @Failure 500 {object} helper.Failure
// @Router /user/register [post]
func (h *pelangganHandler) CreatePelangganHandler(c *gin.Context) {
	var pelangganInput entity.PelangganInput

	if err := c.ShouldBindJSON(&pelangganInput); err != nil {
		splitError := helper.SplitErrorInformation(err)
		responseError := helper.APIFailure(400, "input data required", gin.H{"errors": splitError})

		c.JSON(400, responseError)
		return
	}

	newPelanggan, err := h.service.SaveNewPelanggan(pelangganInput)

	if err != nil {
		responseError := helper.APIFailure(500, "internal server error", gin.H{"error": err.Error()})

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

// LoginPelanggan godoc
// @Summary Login for pelanggan
// @Description Login for pelanggan
// @Tags pelanggan
// @ID Authentication
// @Consume json
// @Produce json
// @Param user body entity.PelangganLogin true "Login pelanggan"
// @Success 200 {object} helper.Response
// @Failure 401 {object} helper.Failure
// @Failure 400 {object} helper.Failure
// @Failure 500 {object} helper.Failure
// @Router /user/login [post]
func (h *pelangganHandler) LoginPelangganHandler(c *gin.Context) {
	var inputLoginPelanggan entity.PelangganLogin

	if err := c.ShouldBindJSON(&inputLoginPelanggan); err != nil {
		splitError := helper.SplitErrorInformation(err)
		responseError := helper.APIFailure(400, "input data required", gin.H{"errors": splitError})

		c.JSON(400, responseError)
		return
	}

	pelanggan, err := h.service.LoginPelanggan(inputLoginPelanggan)

	if err != nil {
		responseError := helper.APIFailure(401, "input data error", gin.H{"errors": err})

		c.JSON(401, responseError)
		return
	}

	token, err := h.authService.GenerateToken(pelanggan.ID)
	if err != nil {
		responseError := helper.APIFailure(500, "internal server error", gin.H{"errors": err})

		c.JSON(401, responseError)
		return
	}
	response := helper.APIResponse(200, "success login user", gin.H{"Authorization": token})
	c.JSON(200, response)
}
