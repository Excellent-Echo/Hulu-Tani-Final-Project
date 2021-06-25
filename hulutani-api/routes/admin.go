package routes

import (
	"hulutani-api/handler"
	"hulutani-api/layer/admin"

	"github.com/gin-gonic/gin"
)

var (
	AdminRepository = admin.NewRepository(DB)
	AdminService    = admin.NewService(AdminRepository)
	adminHandler    = handler.NewAdminHandler(AdminService, authService)
)

func AdminRoute(r *gin.Engine) {
	r.POST("/admin/login", handler.AdminMiddleware(authService), adminHandler.LoginAdminHandler)
}
