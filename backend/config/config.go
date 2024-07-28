package config

import "github.com/caarlos0/env/v11"

type Config struct {
	Env        string `env:"ENV" envDefault:"dev"`
	DBHost     string `env:"BLOG_DB_HOST" envDefault:"db"`
	DBPort     int    `env:"BLOG_DB_PORT" envDefault:"3306"`
	DBUser     string `env:"BLOG_DB_USER" envDefault:"user"`
	DBPassword string `env:"BLOG_DB_PASSWORD" envDefault:"password"`
	DBName     string `env:"BLOG_DB_NAME" envDefault:"blog"`
	ParseTime  bool   `env:"BLOG_PARSE_TIME" envDefault:"true"`

	BEPort int `env:"BLOG_BE_PORT" envDefault:"8080"`
}

func New() (*Config, error) {
	cfg := &Config{}
	if err := env.Parse(cfg); err != nil {
		return nil, err
	}

	return cfg, nil
}
