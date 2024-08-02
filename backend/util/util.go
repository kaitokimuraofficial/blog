package util

import (
	"encoding/json"
	"fmt"
	"net/http"
)

func WriteJSONResponse(w http.ResponseWriter, a interface{}) error {
	aj, err := json.Marshal(a)
	if err != nil {
		return fmt.Errorf("failed to encode to JSON: %v", err)
	}

	_, err = w.Write(aj)
	if err != nil {
		return fmt.Errorf("failed to write data: %v", err)
	}

	return nil
}
