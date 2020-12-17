#!/usr/bin/env bash

yarn build &&
cd build &&
git init &&
git remote add origin https://github.com/allenwyj/react-budgety-app-website.git &&
git add . &&
git commit -m "deploy" &&
git branch -M main &&
git push -u origin main -f
cd ..