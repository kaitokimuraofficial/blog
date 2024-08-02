package store

import (
	"blog/model"
	"context"
	"fmt"

	"github.com/jmoiron/sqlx"
)

type ArticleSrv struct {
	DB   *sqlx.DB
	Repo ArticleRepo
}

type ArticleRepo interface {
	GetArticle(ctx context.Context, db Queryer) (*model.Article, error)
	GetArticles(ctx context.Context, db Queryer) (*model.Articles, error)
	DeleteArticle(ctx context.Context, db Execer) error
}

func (a *ArticleSrv) GetArticle(ctx context.Context) (*model.Article, error) {
	ar, err := a.Repo.GetArticle(ctx, a.DB)
	if err != nil {
		return nil, fmt.Errorf("failed to exec Repo.GetArticle: %w", err)
	}
	return ar, nil
}

func (a *ArticleSrv) GetArticles(ctx context.Context) (*model.Articles, error) {
	ar, err := a.Repo.GetArticles(ctx, a.DB)
	if err != nil {
		return nil, fmt.Errorf("failed to exec Repo.GetArticles: %w", err)
	}
	return ar, nil
}

func (a *ArticleSrv) DeleteArticle(ctx context.Context) error {
	err := a.Repo.DeleteArticle(ctx, a.DB)
	if err != nil {
		return fmt.Errorf("failed to Repo.GetArticles: %w", err)
	}
	return nil
}

func (r *Repository) GetArticle(ctx context.Context, db Queryer) (*model.Article, error) {
	article := model.Article{}

	articleID, ok := ctx.Value("articleID").(string)
	if !ok {
		return nil, fmt.Errorf("articleID not found in context")
	}

	sql := `SELECT ArticleId, title, body, createdAt, UpdatedAt FROM article WHERE ArticleId = ?`
	if err := db.GetContext(ctx, &article, sql, articleID); err != nil {
		return nil, fmt.Errorf("failed to exec SELECT FROM ARTICLE: %v", err)
	}

	return &article, nil
}

func (r *Repository) GetArticles(ctx context.Context, db Queryer) (*model.Articles, error) {
	articles := model.Articles{}

	sql := `SELECT ArticleId, title, body, createdAt, UpdatedAt from article`
	if err := db.SelectContext(ctx, &articles, sql); err != nil {
		return nil, fmt.Errorf("failed to exec SELECT FROM ARTICLE: %v", err)
	}

	return &articles, nil
}

func (r *Repository) DeleteArticle(ctx context.Context, db Execer) error {
	articleID, ok := ctx.Value("articleID").(string)
	if !ok {
		return fmt.Errorf("articleID not found in context")
	}

	sql := `DELETE FROM article WHERE ArticleId = ?`
	res, err := db.ExecContext(ctx, sql, articleID)
	if err != nil {
		return fmt.Errorf("failed to exec DELETE FROM ARTICLE: %v", err)
	}
	if _, err = res.LastInsertId(); err != nil {
		return err
	}
	return nil
}
