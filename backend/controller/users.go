package controller

import (
	"blog/store"
	"blog/util"
	"context"
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

	if err = util.WriteJSONResponse(w, u); err != nil {
		fmt.Printf("%v", err)
	}
}

func (at *UserHandler) GetUsers(w http.ResponseWriter, r *http.Request) {
	ctx := r.Context()

	us, err := at.Service.GetUsers(ctx)
	if err != nil {
		fmt.Printf("failed to exec Service.GetUsers: %v", err)
	}

	if err = util.WriteJSONResponse(w, us); err != nil {
		fmt.Printf("%v", err)
	}
}
