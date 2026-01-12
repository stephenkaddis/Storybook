#!/bin/bash

# Script to set up GitHub repository for Storybook project

echo "Setting up Git repository..."

# Initialize git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Storybook project with boilerplate components"

echo ""
echo "Repository initialized and ready!"
echo ""
echo "To connect to GitHub:"
echo "1. Create a new repository on GitHub (https://github.com/new)"
echo "2. Run the following commands (replace YOUR_USERNAME and REPO_NAME):"
echo ""
echo "   git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git"
echo "   git branch -M main"
echo "   git push -u origin main"
echo ""
echo "Or if you already have a repository URL, run:"
echo "   git remote add origin YOUR_GITHUB_REPO_URL"
echo "   git branch -M main"
echo "   git push -u origin main"
