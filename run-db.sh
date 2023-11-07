#!/bin/bash

docker network create travel-n-share || true

docker run --network travel-n-share --name postgres -v travel-n-share-db:/var/lib/postgresql/data -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=postgres -e POSTGRES_DB=travel-n-share-db -p 5432:5432 -d postgres