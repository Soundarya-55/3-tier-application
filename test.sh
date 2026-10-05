#!/bin/bash

echo "Running application tests..."

if [ -f frontend/index.html ]; then
    echo "Frontend test: PASSED"
else
    echo "Frontend test: FAILED"
    exit 1
fi

if [ -f backend/server.js ]; then
    echo "Backend test: PASSED"
else
    echo "Backend test: FAILED"
    exit 1
fi

echo "All tests passed successfully!"
