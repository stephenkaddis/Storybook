import React from 'react';

export interface MeetingCardProps {
  /**
   * Meeting title
   */
  title: string;
  /**
   * Meeting date/time
   */
  date: string;
  /**
   * Duration in minutes
   */
  duration: number;
  /**
   * Number of participants
   */
  participants: number;
  /**
   * Recording status
   */
  status?: 'recording' | 'completed' | 'processing';
  /**
   * Has AI summary
   */
  hasSummary?: boolean;
  /**
   * Has transcript
   */
  hasTranscript?: boolean;
  /**
   * Thumbnail image URL
   */
  thumbnail?: string;
  /**
   * Click handler
   */
  onClick?: () => void;
}

/**
 * Card component for displaying meeting information
 */
export const MeetingCard: React.FC<MeetingCardProps> = ({
  title,
  date,
  duration,
  participants,
  status = 'completed',
  hasSummary = false,
  hasTranscript = false,
  thumbnail,
  onClick,
}) => {
  const statusColors = {
    recording: '#e74c3c',
    completed: '#28a745',
    processing: '#ffc107',
  };

  return (
    <div
      className="meeting-card"
      onClick={onClick}
      style={{ cursor: onClick ? 'pointer' : 'default' }}
    >
      {thumbnail && (
        <div className="meeting-card__thumbnail">
          <img src={thumbnail} alt={title} />
          {status === 'recording' && (
            <div className="meeting-card__recording-indicator">
              <span className="recording-dot"></span>
              Recording
            </div>
          )}
        </div>
      )}
      <div className="meeting-card__content">
        <div className="meeting-card__header">
          <h3 className="meeting-card__title">{title}</h3>
          <span
            className="meeting-card__status"
            style={{ color: statusColors[status] }}
          >
            {status}
          </span>
        </div>
        <div className="meeting-card__meta">
          <span className="meeting-card__date">{date}</span>
          <span className="meeting-card__duration">{duration} min</span>
          <span className="meeting-card__participants">{participants} participants</span>
        </div>
        <div className="meeting-card__features">
          {hasSummary && (
            <span className="meeting-card__badge meeting-card__badge--summary">
              AI Summary
            </span>
          )}
          {hasTranscript && (
            <span className="meeting-card__badge meeting-card__badge--transcript">
              Transcript
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
