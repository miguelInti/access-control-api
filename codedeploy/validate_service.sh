#!/bin/bash

# This script is used to validate application 
listencount=$(netstat -an | grep 26061 | grep LISTEN | wc -l)
if [ "$listencount" -lt 1 ]; then
    exit 1
else
    exit 0
fi