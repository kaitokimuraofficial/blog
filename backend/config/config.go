package config

import (
	"github.com/go-sql-driver/mysql"
)

type Config struct {
	User      string `env:"BLOG_DB_USER" envDefault:"root"`
	Passwd    string `env:"BLOG_DB_PASSWORD" envDefault:"password"`
	Net       string `env:"BLOG_NET" envDefault:"tcp"`
	Addr      string `env:"BLOG_ADDR" envDefault:"db:3306"`
	DBName    string `env:"BLOG_DB_NAME" envDefault:"blog"`
	ParseTime bool   `env:"BLOG_PARSE_TIME" envDefault:"true"`
}

func New() *mysql.Config {
	c := mysql.NewConfig()
	cfg := &Config{
		User:      "root",
		Passwd:    "password",
		Net:       "tcp",
		Addr:      "db:3306",
		DBName:    "blog",
		ParseTime: true,
	}
	c.User = cfg.User
	c.Passwd = cfg.Passwd
	c.Net = cfg.Net
	c.Addr = cfg.Addr
	c.DBName = cfg.DBName
	c.ParseTime = cfg.ParseTime
	return c
}
