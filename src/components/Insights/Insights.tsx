import React from 'react';

export interface Insight {
  id: string;
  type: 'topic' | 'decision' | 'question' | 'action';
  title: string;
  description?: string;
  timestamp?: number;
  participants?: string[];
}

export interface InsightsProps {
  /**
   * Array of insights
   */
  insights: Insight[];
  /**
   * Title
   */
  title?: string;
}

/**
 * Component for displaying AI-generated insights from meetings
 */
export const Insights: React.FC<InsightsProps> = ({
  insights,
  title = 'Key Insights',
}) => {
  const getIcon = (type: Insight['type']) => {
    switch (type) {
      case 'topic':
        return '💬';
      case 'decision':
        return '✅';
      case 'question':
        return '❓';
      case 'action':
        return '📋';
      default:
        return '💡';
    }
  };

  const getColor = (type: Insight['type']) => {
    switch (type) {
      case 'topic':
        return '#667eea';
      case 'decision':
        return '#28a745';
      case 'question':
        return '#ffc107';
      case 'action':
        return '#e74c3c';
      default:
        return '#6c757d';
    }
  };

  return (
    <div className="insights">
      <h2 className="insights__title">{title}</h2>
      <div className="insights__grid">
        {insights.map((insight) => (
          <div
            key={insight.id}
            className="insights__card"
            style={{ borderLeftColor: getColor(insight.type) }}
          >
            <div className="insights__header">
              <span className="insights__icon">{getIcon(insight.type)}</span>
              <span
                className="insights__type"
                style={{ color: getColor(insight.type) }}
              >
                {insight.type}
              </span>
            </div>
            <h3 className="insights__card-title">{insight.title}</h3>
            {insight.description && (
              <p className="insights__description">{insight.description}</p>
            )}
            {insight.participants && insight.participants.length > 0 && (
              <div className="insights__participants">
                <span>Mentioned by: </span>
                {insight.participants.map((p, i) => (
                  <span key={i} className="insights__participant">
                    {p}
                    {i < insight.participants!.length - 1 && ', '}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
