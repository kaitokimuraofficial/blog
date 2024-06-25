package main

import (
	"blog/controller/articles"
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

	mux.Route("/api", func(r chi.Router) {
		r.Get("/", home.GetHome)
		r.Get("/health", middleware.AddHeader(health.GetHealth))

		r.Route("/articles", func(r chi.Router) {
			r.Get("/", middleware.AddHeader(articles.GetArticles))

			r.Route("/{articleID}", func(r chi.Router) {
				r.Get("/", middleware.AddHeader(articles.GetArticle))
				r.Put("/", middleware.AddHeader(articles.UpdateArticle))
				r.Delete("/", middleware.AddHeader(articles.DeleteArticle))
			})
		})
	})
	return mux, nil
}
