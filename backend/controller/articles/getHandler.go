package articles

import (
	"context"
	"encoding/json"
	"fmt"

	"blog/middleware"
	"blog/model"
	"net/http"
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