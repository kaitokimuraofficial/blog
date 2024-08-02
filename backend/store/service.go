package store

import (
	"blog/model"
	"context"
)

type IArticleService interface {
	GetArticle(ctx context.Context) (*model.Article, error)
	GetArticles(ctx context.Context) (*model.Articles, error)
	DeleteArticle(ctx context.Context) error
}

type IUserService interface {
	GetUser(ctx context.Context) (*model.User, error)
	GetUsers(ctx context.Context) (*model.Users, error)
}
