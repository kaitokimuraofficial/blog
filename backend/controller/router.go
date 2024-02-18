package controller

import (
	"blog/middleware"
	"net/http"
)

func GetRouter() http.Handler {

	mux := http.NewServeMux()
	mux.HandleFunc("GET /", middleware.Handle(getHome))

	return mux
}
