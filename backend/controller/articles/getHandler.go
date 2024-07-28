package articles

import (
	"blog/model"
	"context"
	"encoding/json"
	"fmt"
	"net/http"

	"github.com/go-chi/chi/v5"
	"github.com/jmoiron/sqlx"
)

func GetArticles(w http.ResponseWriter, r *http.Request) {
	articles := model.Articles{}

	db, ok := r.Context().Value("db").(*sqlx.DB)
	if ok != true {
		fmt.Printf("Failed to get DB connection from context")
	}

	sql := `SELECT ArticleId, title, body, createdAt, UpdatedAt from blog.article`
	if err := db.SelectContext(context.Background(), &articles, sql); err != nil {
		fmt.Printf("Error:" + err.Error())
	}
	p, err := json.Marshal(articles)
	fmt.Printf("%s\n", p)
	if err != nil {
		fmt.Printf("Error:" + err.Error())
	}
	_, err = w.Write(p)
	if err != nil {
		fmt.Printf("Error:" + err.Error())
	}
}

func GetArticle(w http.ResponseWriter, r *http.Request) {
	articles := model.Articles{}

	articleID := chi.URLParam(r, "articleID")
	db, ok := r.Context().Value("db").(*sqlx.DB)
	if ok != true {
		fmt.Printf("Failed to get DB connection from context")
	}

	sql := `SELECT ArticleId, title, body, createdAt, UpdatedAt FROM blog.article WHERE ArticleId = ?`
	if err := db.SelectContext(context.Background(), &articles, sql, *&articleID); err != nil {
		fmt.Printf("Error:" + err.Error())
	}
	p, err := json.Marshal(articles)
	fmt.Printf("%s\n", p)
	if err != nil {
		fmt.Printf("Error:" + err.Error())
	}
	_, err = w.Write(p)
	if err != nil {
		fmt.Printf("Error:" + err.Error())
	}
}
