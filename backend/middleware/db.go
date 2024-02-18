package middleware

import (
	"database/sql"
	"fmt"
	"strconv"
	"time"

	"blog/config"
	"github.com/jmoiron/sqlx"
)

func DBNew() (*sqlx.DB, error) {
	cfg := config.New()

	MaxDBRetryCount := 30
	SleepTime := 1 * time.Second
	var err error

	for r := 1; r <= MaxDBRetryCount; r++ {
		println("NewDB Connection Attempt #" + strconv.Itoa(r))
		db, err := sql.Open("mysql", cfg.FormatDSN())
		if err != nil {
			println("NewDB Connection Error:" + err.Error())
			time.Sleep(SleepTime)
			continue
		}
		err = db.Ping()
		if err != nil {
			println("NewDB Connection Error:" + err.Error())
			time.Sleep(SleepTime)
			continue
		} else {
			fmt.Println("Succeeded DB")
			xdb := sqlx.NewDb(db, "mysql")
			return xdb, nil
		}
	}
	return nil, err
}
