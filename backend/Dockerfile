FROM golang:1.23.0-bullseye AS deploy-builder

WORKDIR /app

COPY go.mod go.sum ./
RUN go mod download

COPY . .
RUN go build -trimpath -ldflags "-w -s" -o app

# ---------------------------------------------------

FROM debian:bullseye-slim AS deploy

RUN apt-get update

COPY --from=deploy-builder /app/app .

CMD ["./app"]

# # ---------------------------------------------------

FROM golang:1.23.0 AS dev
WORKDIR /app

RUN go install github.com/air-verse/air@latest
CMD ["air", "-c", ".air.toml"]
