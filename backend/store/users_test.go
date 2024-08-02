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

type MockUserRepo struct {
	mock.Mock
}

func (m *MockUserRepo) GetUser(ctx context.Context, db Queryer, userID string) (*model.User, error) {
	args := m.Called(ctx, db)
	return args.Get(0).(*model.User), args.Error(1)
}

func (m *MockUserRepo) GetUsers(ctx context.Context, db Queryer) (*model.Users, error) {
	args := m.Called(ctx, db)
	return args.Get(0).(*model.Users), args.Error(1)
}

func TestGetUser(t *testing.T) {
	mockRepo := new(MockUserRepo)
	mockDB := &sqlx.DB{}
	userSrv := &UserSrv{
		DB:   mockDB,
		Repo: mockRepo,
	}

	expectedUser := &model.User{
		ID:        1,
		Name:      "Test User",
		Email:     "test@example.com",
		CreatedAt: time.Now(),
		UpdatedAt: time.Now(),
	}

	ctx := context.Background()

	mockRepo.On("GetUser", ctx, mockDB).Return(expectedUser, nil)

	user, err := userSrv.GetUser(ctx, "1")
	assert.NoError(t, err)
	assert.Equal(t, expectedUser, user)

	mockRepo.AssertExpectations(t)
}

func TestGetUsers(t *testing.T) {
	mockRepo := new(MockUserRepo)
	mockDB := &sqlx.DB{}
	userSrv := &UserSrv{
		DB:   mockDB,
		Repo: mockRepo,
	}

	expectedUsers := &model.Users{
		{
			ID:        1,
			Name:      "Test User 1",
			Email:     "test1@example.com",
			CreatedAt: time.Now(),
			UpdatedAt: time.Now(),
		},
		{
			ID:        2,
			Name:      "Test User 2",
			Email:     "test2@example.com",
			CreatedAt: time.Now(),
			UpdatedAt: time.Now(),
		},
	}

	ctx := context.Background()

	mockRepo.On("GetUsers", ctx, mockDB).Return(expectedUsers, nil)

	users, err := userSrv.GetUsers(ctx)
	assert.NoError(t, err)
	assert.Equal(t, expectedUsers, users)

	mockRepo.AssertExpectations(t)
}
