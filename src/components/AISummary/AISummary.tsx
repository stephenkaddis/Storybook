import React from 'react';

export interface AISummaryProps {
  /**
   * Summary title
   */
  title?: string;
  /**
   * Main summary text
   */
  summary: string;
  /**
   * Key points/bullets
   */
  keyPoints?: string[];
  /**
   * Action items
   */
  actionItems?: Array<{
    id: string;
    text: string;
    assignee?: string;
    dueDate?: string;
  }>;
  /**
   * Sentiment analysis
   */
  sentiment?: 'positive' | 'neutral' | 'negative';
  /**
   * Meeting duration
   */
  duration?: number;
  /**
   * Number of participants
   */
  participantCount?: number;
}

/**
 * AI-generated meeting summary component
 */
export const AISummary: React.FC<AISummaryProps> = ({
  title = 'Meeting Summary',
  summary,
  keyPoints = [],
  actionItems = [],
  sentiment,
  duration,
  participantCount,
}) => {
  const sentimentColors = {
    positive: '#28a745',
    neutral: '#6c757d',
    negative: '#dc3545',
  };

  return (
    <div className="ai-summary">
      <div className="ai-summary__header">
        <div className="ai-summary__title-section">
          <h2 className="ai-summary__title">{title}</h2>
          <span className="ai-summary__badge">AI Generated</span>
        </div>
        {(duration || participantCount) && (
          <div className="ai-summary__meta">
            {duration && <span>⏱️ {duration} min</span>}
            {participantCount && <span>👥 {participantCount} people</span>}
          </div>
        )}
      </div>

      {sentiment && (
        <div className="ai-summary__sentiment">
          <span
            className="ai-summary__sentiment-indicator"
            style={{ color: sentimentColors[sentiment] }}
          >
            ●
          </span>
          <span>Sentiment: {sentiment}</span>
        </div>
      )}

      <div className="ai-summary__content">
        <p className="ai-summary__text">{summary}</p>
      </div>

      {keyPoints.length > 0 && (
        <div className="ai-summary__section">
          <h3 className="ai-summary__section-title">Key Points</h3>
          <ul className="ai-summary__list">
            {keyPoints.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
      )}

      {actionItems.length > 0 && (
        <div className="ai-summary__section">
          <h3 className="ai-summary__section-title">Action Items</h3>
          <div className="ai-summary__action-items">
            {actionItems.map((item) => (
              <div key={item.id} className="ai-summary__action-item">
                <input
                  type="checkbox"
                  id={item.id}
                  className="ai-summary__checkbox"
                />
                <label htmlFor={item.id} className="ai-summary__action-text">
                  {item.text}
                </label>
                {(item.assignee || item.dueDate) && (
                  <div className="ai-summary__action-meta">
                    {item.assignee && <span>👤 {item.assignee}</span>}
                    {item.dueDate && <span>📅 {item.dueDate}</span>}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
