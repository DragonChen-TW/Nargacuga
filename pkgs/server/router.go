package server

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func registerRoutes(router *gin.Engine) {
	router.RedirectTrailingSlash = true

	api := router.Group("/api")
	{
		api.POST("/signup", signUp)
		api.POST("/signin", signIn)
	}

	router.NoRoute(func(ctx *gin.Context) {
		ctx.JSON(http.StatusNotFound, gin.H{})
	})
}
