package config

import (
	"fmt"
	"testing"
)

func TestNew(t *testing.T) {
	wantPort := 3333
	t.Setenv("BLOG_BE_PORT", fmt.Sprint(wantPort))

	got, err := New()
	if err != nil {
		t.Fatalf("cannot create config: %v", err)
	}

	if got.BEPort != wantPort {
		t.Errorf("want %d, but %d", wantPort, got.BEPort)
	}

	wantEnv := "dev"
	if got.Env != wantEnv {
		t.Errorf("want %s, but %s", wantEnv, got.Env)
	}

	wantDBHost := "127.0.0.1"
	if got.DBHost != wantDBHost {
		t.Errorf("want %v, but %v", wantDBHost, got.DBHost)
	}

	wantPort = 3306
	if got.DBPort != wantPort {
		t.Errorf("want %d, but %d", wantPort, got.DBPort)
	}

	wantDBUser := "root"
	if got.DBUser != wantDBUser {
		t.Errorf("want %v, but %v", wantDBUser, got.DBUser)
	}

	wantDBPassword := "password"
	if got.DBPassword != wantDBPassword {
		t.Errorf("want %v, but %v", wantDBPassword, got.DBPassword)
	}

	wantDBName := "blog"
	if got.DBName != wantDBName {
		t.Errorf("want %v, but %v", wantDBName, got.DBName)
	}
}
