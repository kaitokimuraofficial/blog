package main

import (
	"blog/config"
	"context"
	"fmt"
	"log"
	"net"
	"os"
)

func main() {
	if err := run(context.Background()); err != nil {
		log.Printf("failed to terminated server: %v", err)
		os.Exit(1)
	}
}

func run(ctx context.Context) error {
	cfg, err := config.New()
	if err != nil {
		return fmt.Errorf("an error occurred: %w", err)
	}

	l, err := net.Listen("tcp", fmt.Sprintf(":%d", cfg.BEPort))
	if err != nil {
		log.Fatalf("failed to listen port %d: %v", cfg.BEPort, err)
	}

	url := fmt.Sprintf("http://%s", l.Addr().String())
	log.Printf("start with: %v", url)

	mux, err := NewMux(ctx, cfg)

	if err != nil {
		return err
	}

	s := NewServer(l, mux)
	return s.Run(ctx)
}
