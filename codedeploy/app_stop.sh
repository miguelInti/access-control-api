#!/bin/bash

# This script is used to stop application
cd /libre/docker/
docker-compose -f docker-compose-access-control-api.yml stop access-control-api