package articles

import (
	"blog/model"
	"context"
	"fmt"
	"net/http"

	"github.com/jmoiron/sqlx"
)

func DeleteArticle(w http.ResponseWriter, r *http.Request) {
	db, ok := r.Context().Value("db").(*sqlx.DB)
	if !ok {
		fmt.Printf("Failed to get DB connection from context")
	}

	id, ok := r.Context().Value("article").(*int)
	if !ok {
		fmt.Printf("Failed to get article ID connection from context")
		http.Error(w, http.StatusText(http.StatusUnprocessableEntity), http.StatusUnprocessableEntity)
		return
	}

	body, ok := r.Context().Value("body").(*string)
	if !ok {
		fmt.Printf("Failed to get article body connection from context")
		http.Error(w, http.StatusText(http.StatusUnprocessableEntity), http.StatusUnprocessableEntity)
		return
	}

	articles := model.Articles{}

	sql := `DELETE FROM blog.article WHERE ArticleId = ?`
	if err := db.SelectContext(context.Background(), &articles, sql, *body, *id); err != nil {
		fmt.Printf("Error:" + err.Error())
	}
}
