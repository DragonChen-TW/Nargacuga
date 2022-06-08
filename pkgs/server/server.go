package server

import "github.com/gin-gonic/gin"

func Start() {
	router := gin.Default()
	registerRoutes(router)
	router.Run(":8900")
}
