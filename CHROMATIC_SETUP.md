# Chromatic Setup Guide

Chromatic is a visual testing and review tool for Storybook that helps catch UI regressions and enables visual review workflows.

## Prerequisites

- A Chromatic account (sign up at https://www.chromatic.com/)
- Your Storybook project set up and working
- GitHub repository connected (already done!)

## Setup Steps

### 1. Sign Up for Chromatic

1. Visit [Chromatic's website](https://www.chromatic.com/)
2. Sign in using your GitHub account (recommended since your project is on GitHub)
3. After signing in, you'll be prompted to create a new project

### 2. Create a New Project in Chromatic

1. Click "Create Project" or "Add Project"
2. Select your GitHub repository: `stephenkaddis/Storybook`
3. Chromatic will automatically detect it's a Storybook project
4. Copy your **Project Token** - you'll need this in the next step

### 3. Set Your Project Token

You have two options:

**Option A: Environment Variable (Recommended for CI/CD)**
```bash
export CHROMATIC_PROJECT_TOKEN=your-project-token-here
```

**Option B: Direct Command**
You can also run Chromatic directly with the token:
```bash
npx chromatic --project-token=your-project-token-here
```

### 4. Run Your First Chromatic Build

Run your first build to establish visual baselines:

```bash
npm run chromatic
```

Or if using the direct command:
```bash
npx chromatic --project-token=your-project-token-here
```

This will:
- Build your Storybook
- Upload it to Chromatic
- Capture snapshots of all your stories
- Establish visual baselines for comparison

### 5. Review Your Build

After the build completes:
- Chromatic will provide a link to review your Storybook
- You can review all captured snapshots
- Approve the baseline if everything looks good

## Integration with GitHub

Chromatic can integrate with your GitHub repository to:
- Run visual tests on pull requests
- Show visual diffs in PR comments
- Block merges if visual changes are detected (optional)

To set this up:
1. In Chromatic, go to your project settings
2. Enable GitHub integration
3. Install the Chromatic GitHub App (if prompted)
4. Configure branch protection rules (optional)

## CI/CD Integration

You can add Chromatic to your CI/CD pipeline. Here's an example GitHub Actions workflow:

```yaml
name: Chromatic

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  chromatic:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install
      - uses: chromaui/action@v1
        with:
          projectToken: ${{ secrets.CHROMATIC_PROJECT_TOKEN }}
```

## Commands

- `npm run chromatic` - Run Chromatic with your project token
- `npx chromatic --project-token=TOKEN` - Run with explicit token
- `npx chromatic --exit-zero-on-changes` - Don't fail build on visual changes (useful for CI)

## Troubleshooting

- **"Project token not found"**: Make sure you've set the `CHROMATIC_PROJECT_TOKEN` environment variable or passed it via `--project-token`
- **"Build failed"**: Check that your Storybook builds successfully with `npm run build-storybook`
- **"Authentication failed"**: Make sure you're signed in to Chromatic and have access to the project

## Resources

- [Chromatic Documentation](https://www.chromatic.com/docs/)
- [Chromatic Quickstart](https://www.chromatic.com/docs/quickstart/)
- [GitHub Integration Guide](https://www.chromatic.com/docs/github)
