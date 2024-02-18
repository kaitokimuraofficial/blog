package controller

import (
	"net/http"
	"encoding/json"
)

func getHome(w http.ResponseWriter, r *http.Request) {
	json.NewEncoder(w).Encode("Hello")
}