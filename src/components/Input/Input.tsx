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

  const sizeClasses = {
    small: 'input-sm',
    medium: 'input-md',
    large: 'input-lg',
  };

  return (
    <div className="form-control flex flex-col gap-2">
      {label && (
        <label className="label">
          <span className="label-text text-sm font-semibold text-base-content tracking-tight">
            {label}
          </span>
        </label>
      )}
      <input
        type={type}
        className={`input input-bordered ${sizeClasses[size]} ${error ? 'input-error' : ''} ${disabled ? 'input-disabled' : ''} w-full`}
        placeholder={placeholder}
        value={value}
        disabled={disabled}
        onChange={handleChange}
        {...props}
      />
      {error && errorMessage && (
        <label className="label">
          <span className="label-text-alt text-error text-xs font-medium">
            {errorMessage}
          </span>
        </label>
      )}
    </div>
  );
};
