import type { Meta, StoryObj } from '@storybook/react';
import { ParticipantAvatar } from './ParticipantAvatar';
import './ParticipantAvatar.css';

const meta = {
  title: 'AI Meeting Tool/ParticipantAvatar',
  component: ParticipantAvatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ParticipantAvatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'Sarah Chen',
  },
};

export const WithImage: Story = {
  args: {
    name: 'Mike Johnson',
    imageUrl: 'https://i.pravatar.cc/150?img=12',
  },
};

export const Active: Story = {
  args: {
    name: 'Emily Rodriguez',
    isActive: true,
  },
};

export const WithName: Story = {
  args: {
    name: 'David Kim',
    showName: true,
  },
};

export const Small: Story = {
  args: {
    name: 'Alex Taylor',
    size: 'small',
  },
};

export const Large: Story = {
  args: {
    name: 'Jessica Wang',
    size: 'large',
    showName: true,
  },
};

export const Group: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <ParticipantAvatar name="Sarah Chen" isActive={true} />
      <ParticipantAvatar name="Mike Johnson" />
      <ParticipantAvatar name="Emily Rodriguez" />
      <ParticipantAvatar name="David Kim" />
    </div>
  ),
};
