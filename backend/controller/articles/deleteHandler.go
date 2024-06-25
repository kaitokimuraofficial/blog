package articles

import (
	"context"
	"fmt"

	"blog/middleware"
	"blog/model"
	"net/http"
)

func DeleteArticle(w http.ResponseWriter, r *http.Request) {
	ctx := r.Context()
	id, ok := ctx.Value("article").(*int)
	if !ok {
		http.Error(w, http.StatusText(http.StatusUnprocessableEntity), http.StatusUnprocessableEntity)
		return
	}
	body, ok := ctx.Value("body").(*string)
	if !ok {
		http.Error(w, http.StatusText(http.StatusUnprocessableEntity), http.StatusUnprocessableEntity)
		return
	}
	articles := model.Articles{}

	db, err := middleware.DBNew()
	if err != nil {
		fmt.Printf("NewDB Connection Error:" + err.Error())
	}
	sql := `DELETE FROM blog.article WHERE ArticleId = ?`
	if err := db.SelectContext(context.Background(), &articles, sql, *body, *id); err != nil {
		fmt.Printf("Error:" + err.Error())
	}
}
