package testutil

import "testing"

func TestOpenDBForTest(t *testing.T) {
	db := OpenDBForTest(t)

	if db.DriverName() != "mysql" {
		t.Errorf("dirrent db name %v", db.DriverName())
	}
}
