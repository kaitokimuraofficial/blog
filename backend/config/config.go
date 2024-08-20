package config

import (
	"fmt"
	"os"
	"strconv"

	"github.com/caarlos0/env/v11"
	"github.com/joho/godotenv"
)

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

	err := godotenv.Load(".env")
	if err != nil {
		fmt.Printf("読み込み出来ませんでした: %v", err)
	}

	if err := env.Parse(cfg); err != nil {
		return nil, fmt.Errorf("failed to parsing config: %w", err)
	}

	if env := os.Getenv("ENV"); env != "" {
		cfg.Env = env
	}

	if dbHost := os.Getenv("BLOG_DB_HOST"); dbHost != "" {
		cfg.DBHost = dbHost
	}

	if dbPort := os.Getenv("BLOG_DB_PORT"); dbPort != "" {
		if port, err := strconv.Atoi(dbPort); err == nil {
			cfg.DBPort = port
		} else {
			return nil, fmt.Errorf("invalid port value for BLOG_DB_PORT: %s", dbPort)
		}
	}

	if dbUser := os.Getenv("BLOG_DB_USER"); dbUser != "" {
		cfg.DBUser = dbUser
	}

	if dbPassword := os.Getenv("BLOG_DB_PASSWORD"); dbPassword != "" {
		cfg.DBPassword = dbPassword
	}

	if dbName := os.Getenv("BLOG_DB_NAME"); dbName != "" {
		cfg.DBName = dbName
	}

	if parseTime := os.Getenv("BLOG_PARSE_TIME"); parseTime != "" {
		if parse, err := strconv.ParseBool(parseTime); err == nil {
			cfg.ParseTime = parse
		} else {
			return nil, fmt.Errorf("invalid boolean value for BLOG_PARSE_TIME: %s", parseTime)
		}
	}

	if bePort := os.Getenv("BLOG_BE_PORT"); bePort != "" {
		if port, err := strconv.Atoi(bePort); err == nil {
			cfg.BEPort = port
		} else {
			return nil, fmt.Errorf("invalid port value for BLOG_BE_PORT: %s", bePort)
		}
	}


	return cfg, nil
}
