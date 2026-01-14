import type { Preview } from '@storybook/react';
import '../src/index.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    chromatic: {
      // Ensure stable story IDs for visual diffs
      diffThreshold: 0.063,
      // Disable animations that might cause false positives
      delay: 0,
      // Explicitly set baseline branch for comparisons
      viewport: [1280, 720],
    },
  },
};

export default preview;
