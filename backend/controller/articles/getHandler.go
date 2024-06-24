package articles

import (
	"context"
	"encoding/json"
	"fmt"

	"blog/middleware"
	"blog/model"
	"net/http"

	"github.com/go-chi/chi"
)

func GetArticles(w http.ResponseWriter, r *http.Request) {
	articles := model.Articles{}

	db, err := middleware.DBNew()
	if err != nil {
		fmt.Printf("NewDB Connection Error:" + err.Error())
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
	db, err := middleware.DBNew()
	if err != nil {
		fmt.Printf("NewDB Connection Error:" + err.Error())
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

// func UpdateArticle(w http.ResponseWriter, r *http.Request) {
// 	ctx := r.Context()
// 	id, ok := ctx.Value("article").(*int)
// 	if !ok {
// 		http.Error(w, http.StatusText(http.StatusUnprocessableEntity), http.StatusUnprocessableEntity)
// 		return
// 	}
// 	articles := model.Articles{}

// 	db, err := middleware.DBNew()
// 	if err != nil {
// 		fmt.Printf("NewDB Connection Error:" + err.Error())
// 	}
// 	sql := `Update title FROM blog.article WHERE ArticleId = ?`
// 	if err := db.SelectContext(context.Background(), &articles, sql, *id); err != nil {
// 		fmt.Printf("Error:" + err.Error())
// 	}
// 	p, err := json.Marshal(articles)
// 	fmt.Printf("%s\n", p)
// 	if err != nil {
// 		fmt.Printf("Error:" + err.Error())
// 	}
// 	_, err = w.Write(p)
// 	if err != nil {
// 		fmt.Printf("Error:" + err.Error())
// 	}
// }