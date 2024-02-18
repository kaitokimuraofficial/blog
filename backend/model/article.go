package model

import (
	"time"
)

type Article struct {
	ArticleID int
	Title     string
	Body      string
	CreatedAt time.Time
	UpdatedAt time.Time
}
