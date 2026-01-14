import React, { useState } from 'react';

export interface MeetingPlayerProps {
  /**
   * Current playback time in seconds
   */
  currentTime?: number;
  /**
   * Total duration in seconds
   */
  duration: number;
  /**
   * Is playing
   */
  isPlaying?: boolean;
  /**
   * Playback speed
   */
  playbackSpeed?: number;
  /**
   * Volume level (0-1)
   */
  volume?: number;
  /**
   * Play/pause handler
   */
  onPlayPause?: () => void;
  /**
   * Seek handler
   */
  onSeek?: (time: number) => void;
  /**
   * Speed change handler
   */
  onSpeedChange?: (speed: number) => void;
  /**
   * Volume change handler
   */
  onVolumeChange?: (volume: number) => void;
}

/**
 * Audio/video player component for meeting recordings
 */
export const MeetingPlayer: React.FC<MeetingPlayerProps> = ({
  currentTime = 0,
  duration,
  isPlaying = false,
  playbackSpeed = 1,
  volume = 1,
  onPlayPause,
  onSeek,
  onSpeedChange,
  onVolumeChange,
}) => {
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className="meeting-player">
      <div className="meeting-player__timeline">
        <div className="meeting-player__progress-bar">
          <div
            className="meeting-player__progress"
            style={{ width: `${progress}%` }}
          />
          <div
            className="meeting-player__handle"
            style={{ left: `${progress}%` }}
          />
        </div>
        <div className="meeting-player__time">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>

      <div className="meeting-player__controls">
        <button
          className="meeting-player__button"
          onClick={onPlayPause}
          aria-label={isPlaying ? 'Pause' : 'Play'}
        >
          {isPlaying ? '⏸️' : '▶️'}
        </button>

        <div className="meeting-player__volume">
          <span>🔊</span>
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={volume}
            onChange={(e) => onVolumeChange?.(parseFloat(e.target.value))}
            className="meeting-player__slider"
          />
          <span>{Math.round(volume * 100)}%</span>
        </div>

        <div className="meeting-player__speed">
          <span>Speed:</span>
          <select
            value={playbackSpeed}
            onChange={(e) => onSpeedChange?.(parseFloat(e.target.value))}
            className="meeting-player__select"
          >
            <option value="0.5">0.5x</option>
            <option value="0.75">0.75x</option>
            <option value="1">1x</option>
            <option value="1.25">1.25x</option>
            <option value="1.5">1.5x</option>
            <option value="2">2x</option>
          </select>
        </div>

        <div className="meeting-player__actions">
          <button className="meeting-player__button" title="Download">
            ⬇️
          </button>
          <button className="meeting-player__button" title="Share">
            🔗
          </button>
        </div>
      </div>
    </div>
  );
};
