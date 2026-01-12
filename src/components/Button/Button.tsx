import React from 'react';

export interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * Button variant style
   */
  variant?: 'primary' | 'secondary' | 'success';
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
  /**
   * Disabled state
   */
  disabled?: boolean;
}

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<ButtonProps> = ({
  primary = false,
  variant,
  size = 'medium',
  backgroundColor,
  label,
  disabled = false,
  ...props
}) => {
  // Support both old 'primary' prop and new 'variant' prop for backward compatibility
  const buttonVariant = variant || (primary ? 'primary' : 'secondary');
  const mode = `storybook-button--${buttonVariant}`;
  
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      style={{ backgroundColor }}
      disabled={disabled}
      {...props}
    >
      {label}
    </button>
  );
};
