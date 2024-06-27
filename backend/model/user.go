package model

import (
	"time"
)

type UserID int64

type User struct {
	ID        UserID `json:"userId" db:"UserId"`
	Name     string    `json:"name" db:"name"`
	Email      string    `json:"email" db:"email"`
	CreatedAt time.Time `json:"created" db:"createdAt"`
	UpdatedAt time.Time `json:"updated" db:"UpdatedAt"`
}

type Users []*User
