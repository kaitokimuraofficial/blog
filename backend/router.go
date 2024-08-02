package main

import (
	"blog/config"
	"blog/controller"
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

	sr := store.Repository{Clock: store.RealClock{}}
	at := &controller.ArticleHandler{
		Service: &store.ArticleSrv{DB: db, Repo: &sr},
	}

	ut := &controller.UserHandler{
		Service: &store.UserSrv{DB: db, Repo: &sr},
	}

	mux.Route("/api", func(r chi.Router) {
		r.Get("/", controller.GetHealth)
		r.Get("/health", controller.GetHealth)

		r.Route("/articles", func(r chi.Router) {
			r.Get("/", at.GetArticles)

			r.Route("/{articleID}", func(r chi.Router) {
				r.Get("/", at.GetArticle)
				r.Delete("/", at.DeleteArticle)
			})
		})

		r.Route("/users", func(r chi.Router) {
			r.Get("/", ut.GetUsers)

			r.Route("/{userID}", func(r chi.Router) {
				r.Get("/", ut.GetUser)
			})
		})
	})
	return mux, cleanup, nil
}
