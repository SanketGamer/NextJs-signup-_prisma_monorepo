#!/bin/bash

set -e

git fetch origin
git reset --hard origin/main

/usr/bin/pnpm install

/usr/bin/pnpm --filter @repo/db exec prisma generate --schema=packages/prisma/prisma/schema.prisma

/usr/bin/pnpm turbo run build

cd apps/web
/usr/bin/pnpm start