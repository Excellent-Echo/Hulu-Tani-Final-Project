package handler

import (
	"hulutani-api/auth"
	"hulutani-api/entity"
	"hulutani-api/helper"
	"hulutani-api/layer/admin"

	"github.com/gin-gonic/gin"
)

type adminHandler struct {
	service     admin.Service
	authService auth.Service
}

func NewAdminHandler(service admin.Service, authService auth.Service) *adminHandler {
	return &adminHandler{service, authService}
}

// LoginAdmin godoc
// @Summary Login Admin
// @Description Login Admin
// @Tags Admin
// @Accept json
// @Produce json
// @Success 200 {object} helper.Response
// @Failure 401 {object} helper.Failure
// @Failure 500 {object} helper.Failure
// @Router /admin/login [post]
func (h *adminHandler) LoginAdminHandler(c *gin.Context) {
	var inputLoginAdmin entity.AdminLogin

	if err := c.ShouldBindJSON(&inputLoginAdmin); err != nil {
		splitError := helper.SplitErrorInformation(err)
		responseError := helper.APIFailure(400, "input data required", gin.H{"errors": splitError})

		c.JSON(400, responseError)
		return
	}

	admin, err := h.service.LoginAdmin(inputLoginAdmin)

	if err != nil {
		responseError := helper.APIFailure(401, "input data error", gin.H{"errors": err})

		c.JSON(401, responseError)
		return
	}

	token, err := h.authService.GenerateToken(admin.ID, admin.Role)
	if err != nil {
		responseError := helper.APIFailure(500, "internal server error", gin.H{"errors": err})

		c.JSON(401, responseError)
		return
	}
	response := helper.APIResponse(200, "success login user", gin.H{"Authorization": token})
	c.JSON(200, response)
}

func (h *adminHandler) CreateAdminHandler(c *gin.Context) {
	var input entity.AdminRegister

	if err := c.ShouldBindJSON(&input); err != nil {
		splitError := helper.SplitErrorInformation(err)
		responseError := helper.APIFailure(400, "input data required", gin.H{"errors": splitError})

		c.JSON(400, responseError)
		return
	}

	newAdmin, err := h.service.SaveNewAdmin(input)

	if err != nil {
		responseError := helper.APIFailure(500, "internal server error", gin.H{"error": err.Error()})

		c.JSON(500, responseError)
		return
	}

	if newAdmin.ID == 0 {
		c.JSON(400, gin.H{"errors": "email sudah terdaftar!"})
		return

	}

	response := helper.APIResponse(201, "success create new User", newAdmin)
	c.JSON(201, response)
}
