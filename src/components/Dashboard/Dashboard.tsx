import React from 'react';

export interface Stat {
  label: string;
  value: string | number;
  change?: number;
  icon?: string;
}

export interface DashboardProps {
  /**
   * Dashboard title
   */
  title?: string;
  /**
   * Statistics to display
   */
  stats: Stat[];
  /**
   * Recent meetings count
   */
  recentMeetings?: number;
  /**
   * Total recordings
   */
  totalRecordings?: number;
}

/**
 * Dashboard component showing meeting statistics and overview
 */
export const Dashboard: React.FC<DashboardProps> = ({
  title = 'Dashboard',
  stats,
  recentMeetings = 0,
  totalRecordings = 0,
}) => {
  return (
    <div className="dashboard">
      <div className="dashboard__header">
        <h1 className="dashboard__title">{title}</h1>
        <div className="dashboard__quick-stats">
          <div className="dashboard__quick-stat">
            <span className="dashboard__quick-stat-value">{recentMeetings}</span>
            <span className="dashboard__quick-stat-label">Recent Meetings</span>
          </div>
          <div className="dashboard__quick-stat">
            <span className="dashboard__quick-stat-value">{totalRecordings}</span>
            <span className="dashboard__quick-stat-label">Total Recordings</span>
          </div>
        </div>
      </div>

      <div className="dashboard__stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="dashboard__stat-card">
            {stat.icon && <div className="dashboard__stat-icon">{stat.icon}</div>}
            <div className="dashboard__stat-content">
              <div className="dashboard__stat-value">{stat.value}</div>
              <div className="dashboard__stat-label">{stat.label}</div>
              {stat.change !== undefined && (
                <div
                  className={`dashboard__stat-change ${
                    stat.change >= 0 ? 'dashboard__stat-change--positive' : 'dashboard__stat-change--negative'
                  }`}
                >
                  {stat.change >= 0 ? '↑' : '↓'} {Math.abs(stat.change)}%
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
