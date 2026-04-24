#!/bin/bash

git fetch origin
git reset --hard origin/main

pnpm install
pnpm turbo run build

cd apps/web
pnpm start