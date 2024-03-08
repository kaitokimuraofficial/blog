package health

import (
	"encoding/json"
	"net/http"
)

type Hello struct {
	Greeting string `json:"greeting"`
}

func GetHealth(w http.ResponseWriter, r *http.Request) {
	greeting := Hello{
		Greeting: "hello world",
	}

	result, err := json.Marshal(greeting)
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
	}
	_, err = w.Write(result)
	if err != nil {
	}
}
