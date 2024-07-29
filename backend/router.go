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
	mux.Use(middleware.SetHeader())

	mux.Route("/api", func(r chi.Router) {
		r.Get("/", health.GetHealth)
		r.Get("/health", health.GetHealth)

		r.Route("/articles", func(r chi.Router) {
			r.Get("/", articles.GetArticles)

			r.Route("/{articleID}", func(r chi.Router) {
				r.Get("/", articles.GetArticle)
				r.Put("/", articles.UpdateArticle)
				r.Delete("/", articles.DeleteArticle)
			})
		})

		r.Route("/users", func(r chi.Router) {
			r.Get("/", users.GetUsers)

			r.Route("/{userID}", func(r chi.Router) {
				r.Get("/", users.GetUser)
			})
		})
	})
	return mux, cleanup, nil
}
