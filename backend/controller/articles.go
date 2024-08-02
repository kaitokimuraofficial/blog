package controller

import (
	"blog/store"
	"blog/util"
	"context"
	"fmt"
	"net/http"

	"github.com/go-chi/chi"
)

type ArticleHandler struct {
	Service store.IArticleService
}

func (at *ArticleHandler) GetArticle(w http.ResponseWriter, r *http.Request) {
	articleID := chi.URLParam(r, "articleID")
	ctx := context.WithValue(r.Context(), "articleID", articleID)

	a, err := at.Service.GetArticle(ctx)
	if err != nil {
		fmt.Printf("failed to exec Service.GetArticle: %v", err)
	}

	if err = util.WriteJSONResponse(w, a); err != nil {
		fmt.Printf("%v", err)
	}
}

func (at *ArticleHandler) GetArticles(w http.ResponseWriter, r *http.Request) {
	ctx := r.Context()

	as, err := at.Service.GetArticles(ctx)
	if err != nil {
		fmt.Printf("failed to exec Service.GetArticles: %v", err)
	}

	if err = util.WriteJSONResponse(w, as); err != nil {
		fmt.Printf("%v", err)
	}
}

func (at *ArticleHandler) DeleteArticle(w http.ResponseWriter, r *http.Request) {
	articleID := chi.URLParam(r, "articleID")
	ctx := context.WithValue(r.Context(), "articleID", articleID)

	err := at.Service.DeleteArticle(ctx)
	if err != nil {
		fmt.Printf("failed to exec Service.DeleteArticle: %v", err)
	}
	fmt.Printf("Successfully delete article %s\n", articleID)
}
