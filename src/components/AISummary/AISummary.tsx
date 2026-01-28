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
  const sentimentClasses = {
    positive: 'text-success',
    neutral: 'text-base-content/60',
    negative: 'text-error',
  };

  return (
    <div className="card bg-base-100 rounded-3xl p-8 shadow-xl border border-base-300 max-w-full">
      <div className="mb-6 pb-5 border-b border-base-300">
        <div className="flex items-center gap-3 mb-3">
          <h2 className="text-3xl font-bold text-base-content tracking-tight">{title}</h2>
          <span className="badge badge-primary badge-sm font-bold uppercase">
            AI Generated
          </span>
        </div>
        {(duration || participantCount) && (
          <div className="flex gap-4 text-sm text-base-content/60">
            {duration && <span>⏱️ {duration} min</span>}
            {participantCount && <span>👥 {participantCount} people</span>}
          </div>
        )}
      </div>

      {sentiment && (
        <div className="flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-base-200 to-base-300 rounded-xl mb-6 text-sm text-base-content/70 border border-base-300">
          <span className={`text-lg ${sentimentClasses[sentiment]}`}>●</span>
          <span>Sentiment: {sentiment}</span>
        </div>
      )}

      <div className="mb-6">
        <p className="text-base leading-relaxed text-base-content/80 font-normal">{summary}</p>
      </div>

      {keyPoints.length > 0 && (
        <div className="mt-6 pt-6 border-t border-base-300">
          <h3 className="text-lg font-semibold text-base-content mb-4">Key Points</h3>
          <ul className="list-disc list-inside text-base-content/80 leading-relaxed space-y-2">
            {keyPoints.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
      )}

      {actionItems.length > 0 && (
        <div className="mt-6 pt-6 border-t border-base-300">
          <h3 className="text-lg font-semibold text-base-content mb-4">Action Items</h3>
          <div className="flex flex-col gap-3">
            {actionItems.map((item) => (
              <div
                key={item.id}
                className="flex items-start gap-3 p-4 bg-gradient-to-r from-base-200 to-base-300 rounded-xl border border-base-300 hover:from-base-300 hover:to-base-200 hover:translate-x-1 transition-all duration-200 hover:shadow-md"
              >
                <input
                  type="checkbox"
                  id={item.id}
                  className="checkbox checkbox-sm mt-1 cursor-pointer"
                />
                <label htmlFor={item.id} className="flex-1 text-base text-base-content cursor-pointer leading-relaxed">
                  {item.text}
                </label>
                {(item.assignee || item.dueDate) && (
                  <div className="flex gap-3 text-xs text-base-content/50 mt-1">
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
