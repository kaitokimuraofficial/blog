package main

import (
	"net/http"

	"blog/controller"
)

func main() {
	mux := controller.GetRouter()
	err := http.ListenAndServe(":8080", mux)
	if err != nil {
		return
	}
}
