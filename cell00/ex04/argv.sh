#!/bin/bash

if [ $# -eq 0 ]; then
    echo "No arguments supplied"
else
    for i in {1..3}; do
        if [ $i -le $# ]; then
            echo "${!i}"
        else
            break
        fi
    done
fi
