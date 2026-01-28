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
  const variantClasses = {
    default: 'badge-neutral',
    primary: 'badge-primary',
    success: 'badge-success',
    warning: 'badge-warning',
    error: 'badge-error',
  };

  const sizeClasses = {
    small: 'badge-sm',
    medium: 'badge-md',
    large: 'badge-lg',
  };

  return (
    <span
      className={`badge ${variantClasses[variant]} ${sizeClasses[size]} font-semibold tracking-tight`}
      {...props}
    >
      {label}
      {onClose && (
        <button
          className="ml-1 opacity-70 hover:opacity-100 transition-opacity flex items-center justify-center"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>
      )}
    </span>
  );
};
