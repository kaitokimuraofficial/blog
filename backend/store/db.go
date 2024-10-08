package store

import (
	"blog/config"
	"context"
	"database/sql"
	"fmt"

	// "time"

	_ "github.com/go-sql-driver/mysql"
	"github.com/jmoiron/sqlx"
)

func New(ctx context.Context, cfg *config.Config) (*sqlx.DB, func(), error) {
	db, err := sql.Open("mysql",
		fmt.Sprintf(
			"%s:%s@tcp(%s:%d)/%s?parseTime=true",
			cfg.DBUser, cfg.DBPassword,
			cfg.DBHost, cfg.DBPort,
			cfg.DBName,
		),
	)
	if err != nil {
		return nil, func() {}, fmt.Errorf("failed to open DB: %w", err)
	}

	// ctx, cancel := context.WithTimeout(ctx, 2*time.Second)
	// defer cancel()
	// if err := db.PingContext(ctx); err != nil {
	// 	return nil, func() { _ = db.Close() }, fmt.Errorf("failed to ping: %w", err)
	// }
	xdb := sqlx.NewDb(db, "mysql")
	return xdb, func() { _ = db.Close() }, nil
}
