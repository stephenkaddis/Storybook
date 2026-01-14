import type { Meta, StoryObj } from '@storybook/react';
import { TranscriptViewer } from './TranscriptViewer';
import type { TranscriptSegment } from './TranscriptViewer';
import './TranscriptViewer.css';

const meta = {
  title: 'AI Meeting Tool/TranscriptViewer',
  component: TranscriptViewer,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TranscriptViewer>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleSegments: TranscriptSegment[] = [
  {
    id: '1',
    speaker: 'Sarah Chen',
    text: 'Thanks everyone for joining. Let\'s start by reviewing the Q4 goals we set last quarter.',
    timestamp: 0,
    confidence: 0.98,
  },
  {
    id: '2',
    speaker: 'Mike Johnson',
    text: 'I think we\'re on track for most of them. The revenue target looks achievable.',
    timestamp: 12,
    confidence: 0.95,
  },
  {
    id: '3',
    speaker: 'Sarah Chen',
    text: 'Great. What about the product launch timeline?',
    timestamp: 28,
    confidence: 0.97,
  },
  {
    id: '4',
    speaker: 'Emily Rodriguez',
    text: 'We\'re about two weeks behind, but we can catch up if we prioritize the core features.',
    timestamp: 35,
    confidence: 0.92,
  },
];

export const Default: Story = {
  args: {
    segments: sampleSegments,
    showTimestamps: true,
  },
};

export const WithHighlighting: Story = {
  args: {
    segments: sampleSegments,
    currentTime: 15,
    showTimestamps: true,
  },
};

export const WithoutTimestamps: Story = {
  args: {
    segments: sampleSegments,
    showTimestamps: false,
  },
};
