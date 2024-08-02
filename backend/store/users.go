package store

import (
	"blog/model"
	"context"
	"fmt"

	"github.com/jmoiron/sqlx"
)

type UserSrv struct {
	DB   *sqlx.DB
	Repo UserRepo
}

type UserRepo interface {
	GetUser(ctx context.Context, db Queryer) (*model.User, error)
	GetUsers(ctx context.Context, db Queryer) (*model.Users, error)
}

func (u *UserSrv) GetUser(ctx context.Context) (*model.User, error) {
	ur, err := u.Repo.GetUser(ctx, u.DB)
	if err != nil {
		return nil, fmt.Errorf("failed to exec Repo.GetUser: %w", err)
	}
	return ur, nil
}

func (u *UserSrv) GetUsers(ctx context.Context) (*model.Users, error) {
	ur, err := u.Repo.GetUsers(ctx, u.DB)
	if err != nil {
		return nil, fmt.Errorf("failed to exec Repo.GetUsers: %w", err)
	}
	return ur, nil
}

func (r *Repository) GetUser(ctx context.Context, db Queryer) (*model.User, error) {
	user := model.User{}

	userID, ok := ctx.Value("userID").(string)
	if !ok {
		return nil, fmt.Errorf("userID not found in context")
	}

	sql := `SELECT UserId, name, email, createdAt, UpdatedAt from user WHERE UserId = ?`
	if err := db.GetContext(ctx, &user, sql, userID); err != nil {
		return nil, fmt.Errorf("failed to exec SELECT FROM USER: %v", err)
	}

	return &user, nil
}

func (r *Repository) GetUsers(ctx context.Context, db Queryer) (*model.Users, error) {
	users := model.Users{}

	sql := `SELECT UserId, name, email, createdAt, UpdatedAt from user`
	if err := db.SelectContext(ctx, &users, sql); err != nil {
		return nil, fmt.Errorf("failed to exec SELECT FROM USER: %v", err)
	}

	return &users, nil
}
