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
  const statusClasses = {
    recording: 'badge-error',
    completed: 'badge-success',
    processing: 'badge-warning',
  };

  return (
    <div
      className={`card bg-base-100 rounded-3xl overflow-hidden shadow-lg border border-base-300 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${onClick ? 'cursor-pointer' : ''}`}
      onClick={onClick}
    >
      {thumbnail && (
        <figure className="w-full h-48 bg-gradient-to-br from-primary via-secondary to-accent relative overflow-hidden">
          <img src={thumbnail} alt={title} className="w-full h-full object-cover" />
          {status === 'recording' && (
            <div className="absolute top-3 right-3 bg-black/75 backdrop-blur-sm text-white px-3.5 py-2 rounded-full text-xs font-semibold flex items-center gap-2 shadow-lg">
              <span className="w-2 h-2 bg-error rounded-full animate-pulse"></span>
              Recording
            </div>
          )}
        </figure>
      )}
      <div className="card-body p-5">
        <div className="flex justify-between items-start mb-3">
          <h3 className="card-title text-xl font-bold text-base-content flex-1 tracking-tight leading-snug">
            {title}
          </h3>
          <span className={`badge badge-sm font-bold uppercase ${statusClasses[status]}`}>
            {status}
          </span>
        </div>
        <div className="flex gap-4 mb-4 text-sm text-base-content/60 font-normal">
          <span>{date}</span>
          <span>{duration} min</span>
          <span>{participants} participants</span>
        </div>
        <div className="flex gap-2 flex-wrap">
          {hasSummary && (
            <span className="badge badge-primary badge-sm font-semibold">
              AI Summary
            </span>
          )}
          {hasTranscript && (
            <span className="badge badge-secondary badge-sm font-semibold">
              Transcript
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
