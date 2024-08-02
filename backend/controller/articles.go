package controller

import (
	"blog/store"
	"context"
	"encoding/json"
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

	aj, err := json.Marshal(*a)
	if err != nil {
		fmt.Printf("failed to encode to JSON: %v", err)
	}

	_, err = w.Write(aj)
	if err != nil {
		fmt.Printf("failed to write data: %v", err)
	}
}

func (at *ArticleHandler) GetArticles(w http.ResponseWriter, r *http.Request) {
	ctx := r.Context()

	as, err := at.Service.GetArticles(ctx)
	if err != nil {
		fmt.Printf("failed to exec Service.GetArticles: %v", err)
	}

	asj, err := json.Marshal(*as)
	if err != nil {
		fmt.Printf("failed to encode to JSON: %v", err)
	}

	_, err = w.Write(asj)
	if err != nil {
		fmt.Printf("failed to write data: %v", err)
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
