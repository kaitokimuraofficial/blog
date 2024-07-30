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
	mux.Use(middleware.SetHeader())

	h := store.Getter{DB: db}
	p := store.Putter{DB: db}

	mux.Route("/api", func(r chi.Router) {
		r.Get("/", health.GetHealth)
		r.Get("/health", health.GetHealth)

		r.Route("/articles", func(r chi.Router) {
			r.Get("/", h.Fn(articles.GetArticles))

			r.Route("/{articleID}", func(r chi.Router) {
				r.Get("/", h.Fn(articles.GetArticle))
				r.Put("/", p.Fn(articles.UpdateArticle))
				r.Delete("/", p.Fn(articles.DeleteArticle))
			})
		})

		r.Route("/users", func(r chi.Router) {
			r.Get("/", h.Fn(users.GetUsers))

			r.Route("/{userID}", func(r chi.Router) {
				r.Get("/", h.Fn(users.GetUser))
			})
		})
	})
	return mux, cleanup, nil
}
