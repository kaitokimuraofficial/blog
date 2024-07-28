package middleware

import (
	"context"
	"net/http"

	"github.com/jmoiron/sqlx"
)

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

func WithDB(db *sqlx.DB) func(http.Handler) http.Handler {
	return func(next http.Handler) http.Handler {
		return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
			ctx := context.WithValue(r.Context(), "db", db)
			next.ServeHTTP(w, r.WithContext(ctx))
		})
	}
}
