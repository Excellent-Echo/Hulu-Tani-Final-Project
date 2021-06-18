package handler

import (
	"hulutani-api/auth"
	"hulutani-api/helper"

	"github.com/dgrijalva/jwt-go"
	"github.com/gin-gonic/gin"
)

func Middleware(authService auth.Service) gin.HandlerFunc {
	return func(c *gin.Context) {
		authHeader := c.GetHeader("Authorization")

		if authHeader == "" || len(authHeader) == 0 {
			errorResponse := helper.APIResponse(401, "Unauthorize", gin.H{"error": "unauthorize user"})

			c.AbortWithStatusJSON(401, errorResponse)
			return
		}

		token, err := authService.ValidateToken(authHeader)

		if err != nil {
			errorResponse := helper.APIResponse(401, "Unauthorize", gin.H{"error": err.Error()})

			c.AbortWithStatusJSON(401, errorResponse)
			return
		}

		claim, ok := token.Claims.(jwt.MapClaims)
		print(claim)

		if !ok {
			errorResponse := helper.APIResponse(401, "Unauthorize", gin.H{"error": "unauthorize user"})

			c.AbortWithStatusJSON(401, errorResponse)
			return
		}

		ID := int(claim["user_id"].(float64))

		c.Set("currentUser", ID)
	}
}
