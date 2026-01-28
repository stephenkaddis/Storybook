import React from 'react';

export interface CardProps {
  /**
   * Card title
   */
  title: string;
  /**
   * Card description/content
   */
  description?: string;
  /**
   * Card image URL
   */
  imageUrl?: string;
  /**
   * Card footer content
   */
  footer?: React.ReactNode;
  /**
   * Optional click handler
   */
  onClick?: () => void;
  /**
   * Card variant style
   */
  variant?: 'default' | 'elevated' | 'outlined';
}

/**
 * Card component for displaying content in a contained format
 */
export const Card: React.FC<CardProps> = ({
  title,
  description,
  imageUrl,
  footer,
  onClick,
  variant = 'default',
  ...props
}) => {
  const variantClasses = {
    default: 'border border-base-300 shadow-sm hover:shadow-md hover:-translate-y-0.5',
    elevated: 'shadow-lg border border-base-300/50 hover:shadow-xl hover:-translate-y-1',
    outlined: 'border-2 border-primary shadow-sm hover:shadow-md hover:border-primary-focus hover:-translate-y-0.5',
  };

  return (
    <div
      className={`card bg-base-100 rounded-2xl overflow-hidden transition-all duration-300 max-w-md ${variantClasses[variant]} ${onClick ? 'cursor-pointer' : ''}`}
      onClick={onClick}
      {...props}
    >
      {imageUrl && (
        <figure className="w-full h-48 overflow-hidden bg-base-200">
          <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
        </figure>
      )}
      <div className="card-body p-5">
        <h3 className="card-title text-xl font-bold text-base-content tracking-tight mb-3">
          {title}
        </h3>
        {description && (
          <p className="text-sm text-base-content/70 leading-relaxed">{description}</p>
        )}
      </div>
      {footer && (
        <div className="card-actions p-4 border-t border-base-300 bg-base-200">
          {footer}
        </div>
      )}
    </div>
  );
};
