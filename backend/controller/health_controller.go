package controller

import (
	"encoding/json"
	"net/http"
)

type Hello struct {
	Greeting      string `json:"greeting"`
}

func getHealth(w http.ResponseWriter, r *http.Request) error {
	greeting := Hello{
		Greeting:  "hello world",
	}

	result, err := json.Marshal(greeting)
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
