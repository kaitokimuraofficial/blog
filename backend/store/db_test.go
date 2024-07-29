package store

import (
	"blog/config"
	"context"
	"testing"
	"time"
)

func TestNew(t *testing.T) {
	t.Helper()

	cfg, err := config.New()
	if err != nil {
		t.Fatalf("failed to create config: %v", err)
	}

	cfg.DBHost = "127.0.0.1"
	db, cleanup, err := New(context.Background(), cfg)
	if err != nil {
		t.Fatalf("failed to create DB: %v", err)
	}
	defer cleanup()

	ctx, cancel := context.WithTimeout(context.Background(), 2*time.Second)
	defer cancel()
	if err := db.PingContext(ctx); err != nil {
		t.Fatalf("failed to ping: %v", err)
	}
}
