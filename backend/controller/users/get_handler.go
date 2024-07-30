package users

import (
	"blog/model"
	"blog/store"
	"encoding/json"
	"fmt"
	"net/http"

	"github.com/go-chi/chi"
)

func GetUsers(db store.Queryer) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		users := model.Users{}

		sql := `SELECT UserId, name, email, createdAt, UpdatedAt from user`
		if err := db.SelectContext(r.Context(), &users, sql); err != nil {
			fmt.Printf("failed to exec SELECT query: %v", err)
		}

		ujs, err := json.Marshal(users)
		if err != nil {
			fmt.Printf("failed to encode to JSON: %v", err)
		}

		_, err = w.Write(ujs)
		if err != nil {
			fmt.Printf("failed to write data: %v", err)
		}
	}
}

func GetUser(db store.Queryer) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		user := model.User{}
		userID := chi.URLParam(r, "userID")

		sql := `SELECT UserId, name, email, createdAt, UpdatedAt FROM user WHERE UserID = ?`
		if err := db.SelectContext(r.Context(), &user, sql, *&userID); err != nil {
			fmt.Printf("failed to exec SELECT query: %v", err)
		}

		uj, err := json.Marshal(user)
		if err != nil {
			fmt.Printf("failed to encode to JSON: %v", err)
		}

		_, err = w.Write(uj)
		if err != nil {
			fmt.Printf("failed to write data: %v", err)
		}
	}
}
