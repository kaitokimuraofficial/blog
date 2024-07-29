package store

import (
	"testing"
	"time"
)

func TestFixedClock_Now(t *testing.T) {
	got := FixedClock{}.Now()

	wantFCNow := time.Date(2022, 5, 10, 12, 34, 56, 0, time.UTC)
	if got != wantFCNow {
		t.Errorf("want %v, but %v", wantFCNow, got)
	}
}

func TestRealClock_Now(t *testing.T) {
	got := RealClock{}.Now()

	if got.Before(time.Now().Add(-1*time.Second)) || got.After(time.Now().Add(1*time.Second)) {
		t.Errorf("There is a little bit time gap")
	}
}
