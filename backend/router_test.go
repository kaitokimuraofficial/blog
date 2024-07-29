package main

import (
	"blog/config"
	"context"
	"io"
	"net/http"
	"net/http/httptest"
	"testing"
)

func TestNewMux(t *testing.T) {
	w := httptest.NewRecorder()
	r := httptest.NewRequest(http.MethodGet, "/api/health", nil)
	cfg, err := config.New()
	if err != nil {
		t.Fatalf("failed to get config %v", err)
	}

	cfg.DBHost = "127.0.0.1"
	sut, cleanup, err := NewMux(context.Background(), cfg)
	if err != nil {
		t.Fatalf("failed to create mux: %v", err)
	}
	defer cleanup()

	sut.ServeHTTP(w, r)
	resp := w.Result()
	t.Cleanup(func() { _ = resp.Body.Close() })

	if resp.StatusCode != http.StatusOK {
		t.Error("want status code 200, but", resp.StatusCode)
	}
	got, err := io.ReadAll(resp.Body)
	if err != nil {
		t.Fatalf("failed to read body: %v", err)
	}
	want := `{"status": "ok"}`
	if string(got) != want {
		t.Errorf("want %q, but got %q", want, got)
	}
}
