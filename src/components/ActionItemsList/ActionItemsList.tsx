import React from 'react';

export interface ActionItem {
  id: string;
  text: string;
  assignee?: string;
  dueDate?: string;
  status?: 'pending' | 'in-progress' | 'completed';
  priority?: 'low' | 'medium' | 'high';
}

export interface ActionItemsListProps {
  /**
   * Array of action items
   */
  items: ActionItem[];
  /**
   * Title
   */
  title?: string;
  /**
   * Show completed items
   */
  showCompleted?: boolean;
  /**
   * Toggle completion handler
   */
  onToggleComplete?: (id: string) => void;
}

/**
 * List component for displaying and managing action items
 */
export const ActionItemsList: React.FC<ActionItemsListProps> = ({
  items,
  title = 'Action Items',
  showCompleted = true,
  onToggleComplete,
}) => {
  const filteredItems = showCompleted
    ? items
    : items.filter((item) => item.status !== 'completed');

  const getPriorityColor = (priority?: string) => {
    switch (priority) {
      case 'high':
        return '#e74c3c';
      case 'medium':
        return '#ffc107';
      case 'low':
        return '#28a745';
      default:
        return '#6c757d';
    }
  };

  return (
    <div className="action-items-list">
      <div className="action-items-list__header">
        <h3 className="action-items-list__title">{title}</h3>
        <span className="action-items-list__count">{filteredItems.length} items</span>
      </div>
      <div className="action-items-list__content">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className={`action-items-list__item ${
              item.status === 'completed' ? 'action-items-list__item--completed' : ''
            }`}
          >
            <input
              type="checkbox"
              checked={item.status === 'completed'}
              onChange={() => onToggleComplete?.(item.id)}
              className="action-items-list__checkbox"
            />
            <div className="action-items-list__content-wrapper">
              <p className="action-items-list__text">{item.text}</p>
              <div className="action-items-list__meta">
                {item.assignee && (
                  <span className="action-items-list__assignee">👤 {item.assignee}</span>
                )}
                {item.dueDate && (
                  <span className="action-items-list__due-date">📅 {item.dueDate}</span>
                )}
                {item.priority && (
                  <span
                    className="action-items-list__priority"
                    style={{ color: getPriorityColor(item.priority) }}
                  >
                    {item.priority} priority
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
        {filteredItems.length === 0 && (
          <div className="action-items-list__empty">No action items</div>
        )}
      </div>
    </div>
  );
};
