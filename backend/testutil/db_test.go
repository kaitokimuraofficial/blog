package testutil

import (
	"testing"

	_ "github.com/go-sql-driver/mysql"
)

func TestOpenDBForTest(t *testing.T) {
	t.Helper()

	db := OpenDBForTest(t)

	if db.DriverName() != "mysql" {
		t.Errorf("diferrent db name %v", db.DriverName())
	}

	_, err := db.Exec("SHOW TABLES")
	if err != nil {
		t.Fatalf("failed to exec 'SHOW TABLES': %v", err)
	}
}
