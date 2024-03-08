package main

import (
	"blog/controller/health"
	"blog/controller/home"
	"blog/middleware"
	"context"
	"net/http"

	"github.com/go-chi/chi"
	mid "github.com/go-chi/chi/v5/middleware"
)

func NewMux(ctx context.Context) (http.Handler, error) {
	mux := chi.NewRouter()
	mux.Use(mid.Logger)

	mux.Get("/api", home.GetHome)
	mux.Get("/api/health", middleware.AddHeader(health.GetHealth))
	return mux, nil
}
