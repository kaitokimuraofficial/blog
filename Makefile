.PHONY: help watch build up down logs ps test
.DEFAULT_GOAL := help

DOCKER_TAG := latest
restart: ## Rebuild and start
	docker compose down --volumes
	docker compose build --no-cache
	docker compose up -d

watch: ## Exec docker compose watch
	docker compose watch

build: ## Build docker image to local development
	docker compose build --no-cache

up: ## Do docker compose up with hot reload
	docker compose up -d

down: ## Do docker compose down
	docker compose down

logs: ## Tail docker compose logs
	docker compose logs -f

ps: ## Check container status
	docker compose ps

dry-migrate: ## Try migration
	mysqldef -u user -p password -h 127.0.0.1 -P 3306 blog --dry-run < ./db/initdb.d/schema.sql

migrate:  ## Execute migration
	mysqldef -u user -p password -h 127.0.0.1 -P 3306 blog < ./db/initdb.d/schema.sql

help: ## Show options
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | \
		awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}'