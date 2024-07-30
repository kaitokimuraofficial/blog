package articles

import (
	"blog/model"
	"blog/store"
	"context"
	"encoding/json"
	"fmt"
	"net/http"

	"github.com/go-chi/chi/v5"
)

func GetArticles(db store.Queryer) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		articles := model.Articles{}

		sql := `SELECT ArticleId, title, body, createdAt, UpdatedAt from article`
		if err := db.SelectContext(r.Context(), &articles, sql); err != nil {
			fmt.Printf("failed to exec SELECT query: %v", err)
		}

		asj, err := json.Marshal(articles)
		if err != nil {
			fmt.Printf("failed to encode to JSON: %v", err)
		}

		_, err = w.Write(asj)
		if err != nil {
			fmt.Printf("failed to write data: %v", err)
		}
	}
}

func GetArticle(db store.Queryer) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		articles := model.Articles{}
		articleID := chi.URLParam(r, "articleID")

		sql := `SELECT ArticleId, title, body, createdAt, UpdatedAt FROM article WHERE ArticleId = ?`
		if err := db.SelectContext(context.Background(), &articles, sql, *&articleID); err != nil {
			fmt.Printf("failed to exec SELECT query: %v", err)
		}

		aj, err := json.Marshal(articles)
		if err != nil {
			fmt.Printf("failed to encode to JSON: %v", err)
		}

		_, err = w.Write(aj)
		if err != nil {
			fmt.Printf("failed to write data: %v", err)
		}
	}
}
