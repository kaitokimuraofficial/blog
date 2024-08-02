package store

import (
	"blog/model"
	"context"
	"testing"
	"time"

	"github.com/jmoiron/sqlx"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/mock"
)

type MockArticleRepo struct {
	mock.Mock
}

func (m *MockArticleRepo) GetArticle(ctx context.Context, db Queryer, articleID string) (*model.Article, error) {
	args := m.Called(ctx, db)
	return args.Get(0).(*model.Article), args.Error(1)
}

func (m *MockArticleRepo) GetArticles(ctx context.Context, db Queryer) (*model.Articles, error) {
	args := m.Called(ctx, db)
	return args.Get(0).(*model.Articles), args.Error(1)
}

func (m *MockArticleRepo) DeleteArticle(ctx context.Context, db Execer, articleID string) error {
	args := m.Called(ctx, db)
	return args.Error(0)
}

func TestGetArticle(t *testing.T) {
	mockRepo := new(MockArticleRepo)
	mockDB := &sqlx.DB{}
	articleSrv := &ArticleSrv{
		DB:   mockDB,
		Repo: mockRepo,
	}

	expectedArticle := &model.Article{
		ID:        model.ArticleID(1),
		Title:     "Test Title",
		Body:      "Test Body",
		CreatedAt: time.Now(),
		UpdatedAt: time.Now(),
	}

	ctx := context.Background()

	mockRepo.On("GetArticle", ctx, mockDB).Return(expectedArticle, nil)

	article, err := articleSrv.GetArticle(ctx, "1")
	assert.NoError(t, err)
	assert.Equal(t, expectedArticle, article)

	mockRepo.AssertExpectations(t)
}

func TestGetArticles(t *testing.T) {
	mockRepo := new(MockArticleRepo)
	mockDB := &sqlx.DB{}
	articleSrv := &ArticleSrv{
		DB:   mockDB,
		Repo: mockRepo,
	}

	expectedArticles := &model.Articles{
		{
			ID:        model.ArticleID(1),
			Title:     "Test Title 1",
			Body:      "Test Body 1",
			CreatedAt: time.Now(),
			UpdatedAt: time.Now(),
		},
		{
			ID:        model.ArticleID(2),
			Title:     "Test Title 2",
			Body:      "Test Body 2",
			CreatedAt: time.Now(),
			UpdatedAt: time.Now(),
		},
	}

	ctx := context.Background()

	mockRepo.On("GetArticles", ctx, mockDB).Return(expectedArticles, nil)

	articles, err := articleSrv.GetArticles(ctx)
	assert.NoError(t, err)
	assert.Equal(t, expectedArticles, articles)

	mockRepo.AssertExpectations(t)
}

func TestDeleteArticle(t *testing.T) {
	mockRepo := new(MockArticleRepo)
	mockDB := &sqlx.DB{}
	articleSrv := &ArticleSrv{
		DB:   mockDB,
		Repo: mockRepo,
	}

	ctx := context.Background()

	mockRepo.On("DeleteArticle", ctx, mockDB).Return(nil)

	err := articleSrv.DeleteArticle(ctx, "1")
	assert.NoError(t, err)

	mockRepo.AssertExpectations(t)
}
