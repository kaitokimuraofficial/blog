package controller

import (
	"blog/middleware"
	"net/http"
)

func GetRouter() http.Handler {

	mux := http.NewServeMux()
	mux.HandleFunc("GET /api", middleware.Handle(getHome))
	mux.HandleFunc("GET /api/health", middleware.Handle(getHealth))

	return mux
}
