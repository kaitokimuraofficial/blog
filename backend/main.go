package main

import (
	"blog/controller"
	"net/http"
)

func main() {
	mux := controller.GetRouter()
	err := http.ListenAndServe(":8080", mux)
	if err != nil {
		return
	}
}
