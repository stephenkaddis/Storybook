import React from 'react';

export interface BadgeProps {
  /**
   * Badge text content
   */
  label: string;
  /**
   * Badge variant/color
   */
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'error';
  /**
   * Badge size
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Show close button
   */
  onClose?: () => void;
}

/**
 * Badge component for displaying labels, tags, or status indicators
 */
export const Badge: React.FC<BadgeProps> = ({
  label,
  variant = 'default',
  size = 'medium',
  onClose,
  ...props
}) => {
  return (
    <span
      className={[
        'storybook-badge',
        `storybook-badge--${variant}`,
        `storybook-badge--${size}`,
      ].join(' ')}
      {...props}
    >
      {label}
      {onClose && (
        <button
          className="storybook-badge__close"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>
      )}
    </span>
  );
};
