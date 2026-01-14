import React, { useState } from 'react';

export interface TranscriptSegment {
  id: string;
  speaker: string;
  text: string;
  timestamp: number;
  confidence?: number;
}

export interface TranscriptViewerProps {
  /**
   * Transcript segments
   */
  segments: TranscriptSegment[];
  /**
   * Current playback time in seconds
   */
  currentTime?: number;
  /**
   * Highlighted segment ID
   */
  highlightedId?: string;
  /**
   * Show timestamps
   */
  showTimestamps?: boolean;
  /**
   * Click handler for segments
   */
  onSegmentClick?: (segment: TranscriptSegment) => void;
}

/**
 * Component for displaying meeting transcripts with speaker identification
 */
export const TranscriptViewer: React.FC<TranscriptViewerProps> = ({
  segments,
  currentTime = 0,
  highlightedId,
  showTimestamps = true,
  onSegmentClick,
}) => {
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="transcript-viewer">
      <div className="transcript-viewer__header">
        <h3>Transcript</h3>
        <span className="transcript-viewer__count">{segments.length} segments</span>
      </div>
      <div className="transcript-viewer__content">
        {segments.map((segment) => {
          const isHighlighted = highlightedId === segment.id || 
            (currentTime >= segment.timestamp && 
             currentTime < segment.timestamp + 5);
          
          return (
            <div
              key={segment.id}
              className={`transcript-viewer__segment ${isHighlighted ? 'transcript-viewer__segment--highlighted' : ''}`}
              onClick={() => onSegmentClick?.(segment)}
            >
              <div className="transcript-viewer__segment-header">
                <span className="transcript-viewer__speaker">{segment.speaker}</span>
                {showTimestamps && (
                  <span className="transcript-viewer__timestamp">
                    {formatTime(segment.timestamp)}
                  </span>
                )}
              </div>
              <p className="transcript-viewer__text">{segment.text}</p>
              {segment.confidence && (
                <div className="transcript-viewer__confidence">
                  Confidence: {Math.round(segment.confidence * 100)}%
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
