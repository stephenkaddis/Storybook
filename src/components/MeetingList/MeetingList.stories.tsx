import type { Meta, StoryObj } from '@storybook/react';
import { MeetingList } from './MeetingList';
import type { MeetingCardProps } from '../MeetingCard/MeetingCard';
import './MeetingList.css';

const meta = {
  title: 'AI Meeting Tool/MeetingList',
  component: MeetingList,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof MeetingList>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleMeetings: MeetingCardProps[] = [
  {
    title: 'Q4 Planning Meeting',
    date: 'Jan 15, 2024',
    duration: 45,
    participants: 8,
    hasSummary: true,
    hasTranscript: true,
  },
  {
    title: 'Product Review Session',
    date: 'Jan 14, 2024',
    duration: 60,
    participants: 12,
    status: 'completed',
    hasSummary: true,
    hasTranscript: true,
  },
  {
    title: 'Team Standup',
    date: 'Jan 13, 2024',
    duration: 30,
    participants: 15,
    status: 'processing',
    hasSummary: false,
    hasTranscript: false,
  },
  {
    title: 'Client Presentation',
    date: 'Jan 12, 2024',
    duration: 90,
    participants: 6,
    hasSummary: true,
    hasTranscript: true,
  },
];

export const Default: Story = {
  args: {
    meetings: sampleMeetings,
    title: 'Recent Meetings',
  },
};

export const Empty: Story = {
  args: {
    meetings: [],
    title: 'My Meetings',
  },
};

export const WithRecording: Story = {
  args: {
    meetings: [
      {
        title: 'Live Team Sync',
        date: 'Jan 15, 2024',
        duration: 0,
        participants: 5,
        status: 'recording',
        hasSummary: false,
        hasTranscript: false,
      },
      ...sampleMeetings.slice(0, 2),
    ],
    title: 'Active Meetings',
  },
};
