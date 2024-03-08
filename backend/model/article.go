package model

import (
	"time"
)

type ArticleID int64

type Article struct {
	ID        ArticleID `json:"id" db:"id"`
	Title     string    `json:"title" db:"title"`
	Body      string    `json:"body" db:"body"`
	CreatedAt time.Time `json:"created" db:"created"`
	UpdatedAt time.Time `json:"modified" db:"modified"`
}
