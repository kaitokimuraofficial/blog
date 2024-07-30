package articles

import (
	"blog/model"
	"blog/store"
	"fmt"
	"net/http"
)

func UpdateArticle(db store.Execer) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		article := model.Article{}

		id, ok := r.Context().Value("article").(*int)
		if !ok {
			fmt.Printf("failed to get article ID connection from context")
			http.Error(w, http.StatusText(http.StatusUnprocessableEntity), http.StatusUnprocessableEntity)
		}

		body, ok := r.Context().Value("body").(*string)
		if !ok {
			fmt.Printf("failed to get article body connection from context")
			http.Error(w, http.StatusText(http.StatusUnprocessableEntity), http.StatusUnprocessableEntity)
		}

		sql := `Update article SET Body = ? WHERE ArticleId = ?`
		_, err := db.ExecContext(r.Context(), sql, &article, *body, *id)
		if err != nil {
			fmt.Printf("failed to exec UPDATE query: %v", err)
		}
	}
}
