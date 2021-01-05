#!/usr/bin/env bash

yarn build &&
cd build &&
git init &&
git remote add origin git@github.com:allenwyj/finics.git &&
git add . &&
git commit -m "deploy" &&
git branch -M main &&
git push -u origin main -f
cd ..