import type { Meta, StoryObj } from '@storybook/react';
import { MeetingCard } from './MeetingCard';
import './MeetingCard.css';

const meta = {
  title: 'AI Meeting Tool/MeetingCard',
  component: MeetingCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof MeetingCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Q4 Planning Meeting',
    date: 'Jan 15, 2024',
    duration: 45,
    participants: 8,
    hasSummary: true,
    hasTranscript: true,
  },
};

export const Recording: Story = {
  args: {
    title: 'Product Review Session',
    date: 'Jan 15, 2024',
    duration: 0,
    participants: 5,
    status: 'recording',
    hasSummary: false,
    hasTranscript: false,
  },
};

export const Processing: Story = {
  args: {
    title: 'Team Standup',
    date: 'Jan 15, 2024',
    duration: 30,
    participants: 12,
    status: 'processing',
    hasSummary: false,
    hasTranscript: false,
  },
};

export const WithThumbnail: Story = {
  args: {
    title: 'Client Presentation',
    date: 'Jan 14, 2024',
    duration: 60,
    participants: 15,
    thumbnail: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400&h=180&fit=crop',
    hasSummary: true,
    hasTranscript: true,
  },
};
