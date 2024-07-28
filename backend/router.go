package main

import (
	"blog/config"
	"blog/controller/articles"
	"blog/controller/health"
	"blog/controller/users"
	"blog/middleware"
	"blog/store"
	"context"
	"net/http"

	"github.com/go-chi/chi"
	mid "github.com/go-chi/chi/v5/middleware"
)

func NewMux(ctx context.Context, cfg *config.Config) (http.Handler, func(), error) {
	db, cleanup, err := store.New(ctx, cfg)
	if err != nil {
		return nil, cleanup, err
	}

	mux := chi.NewRouter()
	mux.Use(mid.Logger)
	mux.Use(middleware.WithDB(db))

	mux.Route("/api", func(r chi.Router) {
		r.Get("/", middleware.AddHeader(health.GetHealth))
		r.Get("/health", middleware.AddHeader(health.GetHealth))

		r.Route("/articles", func(r chi.Router) {
			r.Get("/", middleware.AddHeader(articles.GetArticles))

			r.Route("/{articleID}", func(r chi.Router) {
				r.Get("/", middleware.AddHeader(articles.GetArticle))
				r.Put("/", middleware.AddHeader(articles.UpdateArticle))
				r.Delete("/", middleware.AddHeader(articles.DeleteArticle))
			})
		})

		r.Route("/users", func(r chi.Router) {
			r.Get("/", middleware.AddHeader(users.GetUsers))

			r.Route("/{userID}", func(r chi.Router) {
				r.Get("/", middleware.AddHeader(users.GetUser))
			})
		})
	})
	return mux, cleanup, nil
}
