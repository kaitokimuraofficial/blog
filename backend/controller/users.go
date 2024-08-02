package controller

import (
	"blog/store"
	"blog/util"
	"fmt"
	"net/http"

	"github.com/go-chi/chi"
)

type UserHandler struct {
	Service store.IUserService
}

func (at *UserHandler) GetUser(w http.ResponseWriter, r *http.Request) {
	userID := chi.URLParam(r, "userID")

	u, err := at.Service.GetUser(r.Context(), userID)
	if err != nil {
		fmt.Printf("failed to exec Service.GetUser: %v", err)
	}

	if err = util.WriteJSONResponse(w, u); err != nil {
		fmt.Printf("%v", err)
	}
}

func (at *UserHandler) GetUsers(w http.ResponseWriter, r *http.Request) {
	us, err := at.Service.GetUsers(r.Context())
	if err != nil {
		fmt.Printf("failed to exec Service.GetUsers: %v", err)
	}

	if err = util.WriteJSONResponse(w, us); err != nil {
		fmt.Printf("%v", err)
	}
}
