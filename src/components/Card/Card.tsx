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
  const variantClass = `storybook-card--${variant}`;

  return (
    <div
      className={['storybook-card', variantClass].join(' ')}
      onClick={onClick}
      style={{ cursor: onClick ? 'pointer' : 'default' }}
      {...props}
    >
      {imageUrl && (
        <div className="storybook-card__image">
          <img src={imageUrl} alt={title} />
        </div>
      )}
      <div className="storybook-card__content">
        <h3 className="storybook-card__title">{title}</h3>
        {description && (
          <p className="storybook-card__description">{description}</p>
        )}
      </div>
      {footer && <div className="storybook-card__footer">{footer}</div>}
    </div>
  );
};
