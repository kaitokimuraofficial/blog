package util

import (
	"net/http"
	"net/http/httptest"
	"testing"
)

func TestWriteJSONResponse(t *testing.T) {
	tests := []struct {
		name           string
		input          interface{}
		expectedStatus int
		expectedBody   string
		expectError    bool
	}{
		{
			name:           "valid input",
			input:          map[string]string{"message": "hello"},
			expectedStatus: http.StatusOK,
			expectedBody:   `{"message":"hello"}`,
			expectError:    false,
		},
		{
			name:           "invalid input",
			input:          make(chan int),
			expectedStatus: http.StatusInternalServerError,
			expectedBody:   "",
			expectError:    true,
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			rr := httptest.NewRecorder()
			err := WriteJSONResponse(rr, tt.input)

			if (err != nil) != tt.expectError {
				t.Errorf("WriteJSONResponse() error = %v, expectError %v", err, tt.expectError)
				return
			}

			if !tt.expectError {
				if status := rr.Code; status != tt.expectedStatus {
					t.Errorf("WriteJSONResponse() status = %v, expectedStatus %v", status, tt.expectedStatus)
				}

				if body := rr.Body.String(); body != tt.expectedBody {
					t.Errorf("WriteJSONResponse() body = %v, expectedBody %v", body, tt.expectedBody)
				}
			}
		})
	}
}
