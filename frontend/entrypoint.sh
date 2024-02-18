#!/usr/bin/env bash

yarn install --flat --frozen-lockfile
npm install

exec "$@"