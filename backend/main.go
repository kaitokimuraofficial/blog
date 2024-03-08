package main

import (
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
	l, err := net.Listen("tcp", fmt.Sprintf(":%d", 8080))
	if err != nil {
		log.Fatalf("failed to listen port %d: %v", 8080, err)
	}

	url := fmt.Sprintf("http://%s", l.Addr().String())
	log.Printf("start with: %v", url)

	mux, err := NewMux(ctx)

	if err != nil {
		return err
	}

	s := NewServer(l, mux)
	return s.Run(ctx)
}
