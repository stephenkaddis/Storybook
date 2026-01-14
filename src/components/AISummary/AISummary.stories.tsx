import type { Meta, StoryObj } from '@storybook/react';
import { AISummary } from './AISummary';
import './AISummary.css';

const meta = {
  title: 'AI Meeting Tool/AISummary',
  component: AISummary,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof AISummary>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    summary: 'The team discussed Q4 goals and progress. Revenue targets are on track, but the product launch timeline is two weeks behind schedule. The team agreed to prioritize core features to catch up.',
    keyPoints: [
      'Revenue targets are achievable for Q4',
      'Product launch is 2 weeks behind schedule',
      'Team will prioritize core features to catch up',
      'Next review scheduled for next week',
    ],
    actionItems: [
      {
        id: '1',
        text: 'Update product roadmap with prioritized features',
        assignee: 'Emily Rodriguez',
        dueDate: 'Jan 20, 2024',
      },
      {
        id: '2',
        text: 'Schedule follow-up meeting for next week',
        assignee: 'Sarah Chen',
        dueDate: 'Jan 18, 2024',
      },
    ],
    sentiment: 'positive',
    duration: 45,
    participantCount: 8,
  },
};

export const Minimal: Story = {
  args: {
    summary: 'Brief standup meeting covering daily tasks and blockers.',
  },
};

export const WithSentiment: Story = {
  args: {
    summary: 'The discussion revealed some concerns about the project timeline. Team members expressed frustration with resource constraints.',
    sentiment: 'negative',
    duration: 30,
    participantCount: 5,
  },
};
