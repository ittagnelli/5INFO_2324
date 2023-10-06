#!/bin/bash

DEFAULT_COMMIT_MESSAGE="Aggiunto"

if [ $# -eq 0 ]; then
    COMMIT_MESSAGE="$DEFAULT_COMMIT_MESSAGE"
else
    COMMIT_MESSAGE="$1"
fi

git pull
git add *
git commit -m "$COMMIT_MESSAGE"
git push
