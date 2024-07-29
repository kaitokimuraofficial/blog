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

func GetArticles(w http.ResponseWriter, r *http.Request) {
	articles := model.Articles{}

	db, ok := r.Context().Value("db").(store.Queryer)
	if ok != true {
		fmt.Printf("failed to get DB connection from context")
	}

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

func GetArticle(w http.ResponseWriter, r *http.Request) {
	articles := model.Articles{}

	articleID := chi.URLParam(r, "articleID")
	db, ok := r.Context().Value("db").(store.Queryer)
	if ok != true {
		fmt.Printf("failed to get DB connection from context")
	}

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
