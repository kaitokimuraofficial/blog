package controller

import (
	"net/http"
)

func GetRouter() http.Handler {

	mux := http.NewServeMux()
	mux.HandleFunc("GET /", getHome)

	return mux
}
