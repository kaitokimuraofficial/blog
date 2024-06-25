package model

import (
	"time"
)

type ArticleID int64

type Article struct {
	ID        ArticleID `json:"articleId" db:"ArticleId"`
	Title     string    `json:"title" db:"title"`
	Body      string    `json:"body" db:"body"`
	CreatedAt time.Time `json:"created" db:"createdAt"`
	UpdatedAt time.Time `json:"updated" db:"UpdatedAt"`
}

type Articles []*Article
