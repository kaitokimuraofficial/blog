package middleware

import "net/http"

func Handle(handlers ...func(w http.ResponseWriter, r *http.Request) error) func(w http.ResponseWriter, r *http.Request) {
	return func(w http.ResponseWriter, r *http.Request) {
		err := CorsMiddleware(w)
		if err != nil {
			return
		}
		for _, handler := range handlers {
			if err := handler(w, r); err != nil {
				return
			}
		}
	}
}
