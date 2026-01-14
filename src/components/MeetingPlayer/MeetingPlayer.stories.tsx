import type { Meta, StoryObj } from '@storybook/react';
import { MeetingPlayer } from './MeetingPlayer';
import { useState } from 'react';
import './MeetingPlayer.css';

const meta = {
  title: 'AI Meeting Tool/MeetingPlayer',
  component: MeetingPlayer,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof MeetingPlayer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    currentTime: 125,
    duration: 2700,
    isPlaying: false,
    playbackSpeed: 1,
    volume: 0.8,
  },
};

export const Playing: Story = {
  args: {
    currentTime: 125,
    duration: 2700,
    isPlaying: true,
    playbackSpeed: 1,
    volume: 0.8,
  },
};

export const Interactive: Story = {
  render: (args) => {
    const [currentTime, setCurrentTime] = useState(125);
    const [isPlaying, setIsPlaying] = useState(false);
    const [speed, setSpeed] = useState(1);
    const [volume, setVolume] = useState(0.8);

    return (
      <MeetingPlayer
        {...args}
        currentTime={currentTime}
        duration={2700}
        isPlaying={isPlaying}
        playbackSpeed={speed}
        volume={volume}
        onPlayPause={() => setIsPlaying(!isPlaying)}
        onSeek={setCurrentTime}
        onSpeedChange={setSpeed}
        onVolumeChange={setVolume}
      />
    );
  },
};
