# GitHub Setup Guide

Follow these steps to connect your Storybook project to GitHub:

## Prerequisites

1. **Install Xcode Command Line Tools** (if not already installed):
   ```bash
   xcode-select --install
   ```
   This will open a dialog - click "Install" and wait for it to complete.

2. **Create a GitHub account** (if you don't have one): https://github.com

## Setup Steps

### Option 1: Using the Setup Script

1. After installing Xcode Command Line Tools, run:
   ```bash
   ./setup-github.sh
   ```

2. Create a new repository on GitHub:
   - Go to https://github.com/new
   - Name your repository (e.g., "storybook-project")
   - Don't initialize with README, .gitignore, or license (we already have these)
   - Click "Create repository"

3. Connect your local repository to GitHub:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git branch -M main
   git push -u origin main
   ```

### Option 2: Manual Setup

1. Initialize git repository:
   ```bash
   git init
   ```

2. Add all files:
   ```bash
   git add .
   ```

3. Create initial commit:
   ```bash
   git commit -m "Initial commit: Storybook project with boilerplate components"
   ```

4. Create a new repository on GitHub (same as Option 1, step 2)

5. Connect and push:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git branch -M main
   git push -u origin main
   ```

## Using SSH Instead of HTTPS

If you have SSH keys set up with GitHub, you can use:
```bash
git remote add origin git@github.com:YOUR_USERNAME/YOUR_REPO_NAME.git
```

## Troubleshooting

- **"xcode-select: error"**: Install Xcode Command Line Tools first
- **"Permission denied"**: Make sure you're authenticated with GitHub (use `gh auth login` if you have GitHub CLI, or set up SSH keys)
- **"Repository not found"**: Double-check your username and repository name
