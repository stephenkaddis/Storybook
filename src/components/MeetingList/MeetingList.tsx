import React from 'react';
import { MeetingCard } from '../MeetingCard/MeetingCard';
import type { MeetingCardProps } from '../MeetingCard/MeetingCard';

export interface MeetingListProps {
  /**
   * Array of meetings
   */
  meetings: MeetingCardProps[];
  /**
   * List title
   */
  title?: string;
  /**
   * Show empty state
   */
  emptyMessage?: string;
  /**
   * Click handler for meetings
   */
  onMeetingClick?: (meeting: MeetingCardProps) => void;
}

/**
 * List component for displaying multiple meeting cards
 */
export const MeetingList: React.FC<MeetingListProps> = ({
  meetings,
  title,
  emptyMessage = 'No meetings found',
  onMeetingClick,
}) => {
  return (
    <div className="meeting-list">
      {title && <h2 className="meeting-list__title">{title}</h2>}
      {meetings.length > 0 ? (
        <div className="meeting-list__grid">
          {meetings.map((meeting, index) => (
            <MeetingCard
              key={index}
              {...meeting}
              onClick={() => onMeetingClick?.(meeting)}
            />
          ))}
        </div>
      ) : (
        <div className="meeting-list__empty">{emptyMessage}</div>
      )}
    </div>
  );
};
