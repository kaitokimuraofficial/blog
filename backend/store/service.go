package store

import (
	"blog/model"
	"context"
)

type IArticleService interface {
	GetArticle(ctx context.Context, articleID string) (*model.Article, error)
	GetArticles(ctx context.Context) (*model.Articles, error)
	DeleteArticle(ctx context.Context, articleID string) error
}

type IUserService interface {
	GetUser(ctx context.Context, userID string) (*model.User, error)
	GetUsers(ctx context.Context) (*model.Users, error)
}
