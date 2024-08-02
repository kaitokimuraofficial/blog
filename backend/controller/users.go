package controller

import (
	"blog/store"
	"context"
	"encoding/json"
	"fmt"
	"net/http"

	"github.com/go-chi/chi"
)

type UserHandler struct {
	Service store.IUserService
}

func (at *UserHandler) GetUser(w http.ResponseWriter, r *http.Request) {
	userID := chi.URLParam(r, "userID")
	ctx := context.WithValue(r.Context(), "userID", userID)

	u, err := at.Service.GetUser(ctx)
	if err != nil {
		fmt.Printf("failed to exec Service.GetUser: %v", err)
	}

	asj, err := json.Marshal(*u)
	if err != nil {
		fmt.Printf("failed to encode to JSON: %v", err)
	}

	_, err = w.Write(asj)
	if err != nil {
		fmt.Printf("failed to write data: %v", err)
	}
}

func (at *UserHandler) GetUsers(w http.ResponseWriter, r *http.Request) {
	ctx := r.Context()

	us, err := at.Service.GetUsers(ctx)
	if err != nil {
		fmt.Printf("failed to exec Service.GetUsers: %v", err)
	}

	usj, err := json.Marshal(*us)
	if err != nil {
		fmt.Printf("failed to encode to JSON: %v", err)
	}

	_, err = w.Write(usj)
	if err != nil {
		fmt.Printf("failed to write data: %v", err)
	}
}
