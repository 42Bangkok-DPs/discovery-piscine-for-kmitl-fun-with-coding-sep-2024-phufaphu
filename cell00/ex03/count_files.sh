#!/bin/bash

count=$(( $(find . -type f | wc -l) + $(find . -type d | wc -l) ))

echo "$count"