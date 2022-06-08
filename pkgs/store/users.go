package store

type User struct {
	Username string `json:"username"`
	Password string `json:"password"`
}

var Users []*User
