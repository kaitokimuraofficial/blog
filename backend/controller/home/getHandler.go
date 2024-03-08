package home

import (
	"encoding/json"
	"net/http"
)

type Pod struct {
	Namespace string `json:"namespace"`
	Name      string `json:"name"`
	Status    string `json:"status"`
}

func GetHome(w http.ResponseWriter, r *http.Request) {
	pods := Pod{
		Namespace: "default",
		Name:      "test-xxx",
		Status:    "Running",
	}

	result, err := json.Marshal(pods)
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
	}
	_, err = w.Write(result)
	if err != nil {
	}
}
