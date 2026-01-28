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
    <div className="p-12 bg-gradient-to-br from-base-100 to-base-200 min-w-[800px]">
      <div className="flex justify-between items-center mb-10 pb-6 border-b border-base-300">
        <h1 className="text-4xl font-bold text-base-content tracking-tight bg-gradient-to-r from-base-content to-base-content/70 bg-clip-text text-transparent">
          {title}
        </h1>
        <div className="flex gap-6">
          <div className="text-right">
            <div className="block text-3xl font-bold text-primary">{recentMeetings}</div>
            <div className="block text-xs text-base-content/60 uppercase tracking-wider mt-1">
              Recent Meetings
            </div>
          </div>
          <div className="text-right">
            <div className="block text-3xl font-bold text-primary">{totalRecordings}</div>
            <div className="block text-xs text-base-content/60 uppercase tracking-wider mt-1">
              Total Recordings
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-5">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="card bg-base-100 shadow-md border border-base-300 rounded-2xl p-6 flex items-start gap-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            {stat.icon && <div className="text-4xl leading-none">{stat.icon}</div>}
            <div className="flex-1">
              <div className="text-4xl font-bold text-base-content mb-1.5 tracking-tight">
                {stat.value}
              </div>
              <div className="text-sm text-base-content/60 mb-2">{stat.label}</div>
              {stat.change !== undefined && (
                <div
                  className={`text-xs font-semibold inline-block px-2 py-1 rounded-md ${
                    stat.change >= 0
                      ? 'text-success bg-success/10'
                      : 'text-error bg-error/10'
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
