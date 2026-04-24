#!/bin/bash

git fetch origin
git reset --hard origin/main

npm install
npm run build
npm run start