package controller

import (
	"encoding/json"
	"net/http"
)

type Pod struct {
	Namespace string `json:"namespace"`
	Name      string `json:"name"`
	Status    string `json:"status"`
}

func getHome(w http.ResponseWriter, r *http.Request) error {
	pods := Pod{
		Namespace: "default",
		Name:      "test-xxx",
		Status:    "Running",
	}

	result, err := json.Marshal(pods)
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		return err
	}
	_, err = w.Write(result)
	if err != nil {
		return err
	}
	return nil
}
