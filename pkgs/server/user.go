package server

import (
	"fmt"
	"net/http"

	"github.com/dragonchen-tw/nargacuga/pkgs/store"
	"github.com/gin-gonic/gin"
)

func signUp(ctx *gin.Context) {
	user := new(store.User)
	if err := ctx.Bind(user); err != nil {
		ctx.AbortWithStatusJSON(http.StatusBadRequest, gin.H{"err": err.Error()})
		return
	}
	fmt.Println("Request", ctx.Request.Form)
	fmt.Println("User", user)
	store.Users = append(store.Users, user)
	ctx.JSON(http.StatusOK, gin.H{
		"msg": "Signed up successfully.",
		"jwt": "123456789",
	})
}

func signIn(ctx *gin.Context) {
	user := new(store.User)
	if err := ctx.Bind(user); err != nil {
		ctx.AbortWithStatusJSON(http.StatusBadRequest, gin.H{"err": err.Error()})
		return
	}
	for _, u := range store.Users {
		if u.Username == user.Username && u.Password == user.Password {
			ctx.JSON(http.StatusOK, gin.H{
				"name": user.Username,
				"msg":  "Signed in successfully.",
				"jwt":  "123456789",
			})
			return
		}
	}
	ctx.AbortWithStatusJSON(http.StatusUnauthorized, gin.H{
		"err": "Sign in failed.",
	})
}
