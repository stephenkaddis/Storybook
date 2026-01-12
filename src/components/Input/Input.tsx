import React from 'react';

export interface InputProps {
  /**
   * Input label
   */
  label?: string;
  /**
   * Input placeholder text
   */
  placeholder?: string;
  /**
   * Input value
   */
  value?: string;
  /**
   * Input type
   */
  type?: 'text' | 'email' | 'password' | 'number' | 'tel';
  /**
   * Disabled state
   */
  disabled?: boolean;
  /**
   * Error state
   */
  error?: boolean;
  /**
   * Error message
   */
  errorMessage?: string;
  /**
   * Input size
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Change handler
   */
  onChange?: (value: string) => void;
}

/**
 * Input component for text entry
 */
export const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  value,
  type = 'text',
  disabled = false,
  error = false,
  errorMessage,
  size = 'medium',
  onChange,
  ...props
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <div className="storybook-input-wrapper">
      {label && (
        <label className="storybook-input-label">{label}</label>
      )}
      <input
        type={type}
        className={[
          'storybook-input',
          `storybook-input--${size}`,
          error ? 'storybook-input--error' : '',
          disabled ? 'storybook-input--disabled' : '',
        ].join(' ')}
        placeholder={placeholder}
        value={value}
        disabled={disabled}
        onChange={handleChange}
        {...props}
      />
      {error && errorMessage && (
        <span className="storybook-input-error">{errorMessage}</span>
      )}
    </div>
  );
};
