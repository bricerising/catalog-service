#!/bin/bash

docker build -t catalog-service:latest -f docker/Dockerfile $* .
