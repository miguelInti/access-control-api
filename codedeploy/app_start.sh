#!/bin/bash

# This script is used to start the application
cd /libre/docker/
docker-compose -f docker-compose-access-control-api.yml up -d --build access-control-api