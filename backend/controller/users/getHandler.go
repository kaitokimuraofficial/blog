package users

import (
	"context"
	"encoding/json"
	"fmt"
	"github.com/jmoiron/sqlx"

	"blog/model"
	"net/http"

	"github.com/go-chi/chi"
)

func GetUsers(w http.ResponseWriter, r *http.Request) {
	users := model.Users{}

	db, ok := r.Context().Value("db").(*sqlx.DB)
	if ok != true {
		fmt.Printf("Failed to get DB connection from context")
	}

	sql := `SELECT UserId, name, email, createdAt, UpdatedAt from blog.user`
	if err := db.SelectContext(context.Background(), &users, sql); err != nil {
		fmt.Printf("Error:" + err.Error())
	}
	p, err := json.Marshal(users)
	fmt.Printf("%s\n", p)
	if err != nil {
		fmt.Printf("Error:" + err.Error())
	}
	_, err = w.Write(p)
	if err != nil {
		fmt.Printf("Error:" + err.Error())
	}
}

func GetUser(w http.ResponseWriter, r *http.Request) {
	userID := chi.URLParam(r, "userID")

	db, ok := r.Context().Value("db").(*sqlx.DB)
	if ok != true {
		fmt.Printf("Failed to get DB connection from context")
	}

	users := model.Users{}

	sql := `SELECT UserId, name, email, createdAt, UpdatedAt FROM blog.user WHERE UserID = ?`
	if err := db.SelectContext(context.Background(), &users, sql, *&userID); err != nil {
		fmt.Printf("Error:" + err.Error())
	}
	p, err := json.Marshal(users)
	fmt.Printf("%s\n", p)
	if err != nil {
		fmt.Printf("Error:" + err.Error())
	}
	_, err = w.Write(p)
	if err != nil {
		fmt.Printf("Error:" + err.Error())
	}
}
