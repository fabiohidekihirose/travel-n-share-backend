#!/bin/bash

docker build -t travel-n-share-backend .

docker run --network travel-n-share --name travel-n-share-backend -e DATABASE_URL=postgresql://postgres:postgres@postgres:5432/travel-n-share-db -e PORT=8000 -p 8000:8000 travel-n-share-backend