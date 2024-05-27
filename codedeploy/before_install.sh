#!/bin/bash

# This script is executed before copying the source all
export AWS_DEFAULT_REGION=us-east-1
export AWS_ACCOUNT_ID=814231045142
export APP_NAME=access-control-api

cd /libre/docker/apps
#sudo chown ec2-user:ec2-user pms/pms*.jar
aws ecr get-login-password --region $AWS_DEFAULT_REGION | docker login --username AWS --password-stdin $AWS_ACCOUNT_ID.dkr.ecr.$AWS_DEFAULT_REGION.amazonaws.com
docker pull $AWS_ACCOUNT_ID.dkr.ecr.$AWS_DEFAULT_REGION.amazonaws.com/inti-$APP_NAME:latest