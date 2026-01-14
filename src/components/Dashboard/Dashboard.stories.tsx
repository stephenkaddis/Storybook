import type { Meta, StoryObj } from '@storybook/react';
import { Dashboard } from './Dashboard';
import type { Stat } from './Dashboard';
import './Dashboard.css';

const meta = {
  title: 'AI Meeting Tool/Dashboard',
  component: Dashboard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Dashboard>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleStats: Stat[] = [
  {
    label: 'Total Meeting Hours',
    value: '124.5',
    change: 12,
    icon: '⏱️',
  },
  {
    label: 'AI Summaries Generated',
    value: '89',
    change: 8,
    icon: '🤖',
  },
  {
    label: 'Action Items Tracked',
    value: '234',
    change: -5,
    icon: '📋',
  },
  {
    label: 'Participants',
    value: '156',
    change: 23,
    icon: '👥',
  },
];

export const Default: Story = {
  args: {
    stats: sampleStats,
    recentMeetings: 12,
    totalRecordings: 89,
  },
};

export const Minimal: Story = {
  args: {
    stats: [
      { label: 'Meetings', value: 45 },
      { label: 'Hours Recorded', value: '67.5' },
    ],
  },
};
