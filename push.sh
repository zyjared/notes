#!/bin/bash

commit_message=${1:-"update"}

GREEN='\033[0;32m'
RED='\033[0;31m'
NC='\033[0m'

function print_message() {
  echo -e "${GREEN}$1${NC}"
}

function print_error() {
  echo -e "${RED}$1${NC}" >&2
}

print_message "Adding changes..."
if ! git add .; then
  print_error "Failed to add changes."
fi

print_message "Committing changes..."
if ! git commit --amend -m "$commit_message" --no-edit; then
  print_error "Failed to amend commit."
fi

print_message "Pushing changes..."
if ! git push origin main --force; then
  print_error "Failed to push changes."
fi

print_message "Operation completed. Press any key to exit..."
read -n 1 -s