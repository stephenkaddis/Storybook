# Storybook Project

A Storybook project with boilerplate React components.

## Components

This project includes the following boilerplate components:

- **Button** - Interactive button component with multiple variants and sizes
- **Card** - Container component for displaying content with optional image and footer
- **Input** - Form input component with validation states
- **Badge** - Label/tag component with multiple color variants

## Getting Started

### Installation

Install dependencies:

```bash
npm install
```

### Running Storybook

Start the Storybook development server:

```bash
npm run storybook
```

This will start Storybook on `http://localhost:6006`

### Building Storybook

Build a static version of Storybook:

```bash
npm run build-storybook
```

The static files will be generated in the `storybook-static` directory.

## Project Structure

```
.
├── .storybook/          # Storybook configuration
├── src/
│   ├── components/      # React components
│   │   ├── Button/
│   │   ├── Card/
│   │   ├── Input/
│   │   └── Badge/
│   └── index.css       # Global styles
├── package.json
└── README.md
```

## Technologies

- React 18
- TypeScript
- Storybook 8
- Vite

## GitHub Setup

To connect this project to GitHub, see [GITHUB_SETUP.md](./GITHUB_SETUP.md) for detailed instructions.
