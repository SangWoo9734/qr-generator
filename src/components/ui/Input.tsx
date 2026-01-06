import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input: React.FC<InputProps> = ({ label, error, className = '', id, ...props }) => {
  return (
    <div className="w-full space-y-1.5">
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-text-primary">
          {label}
        </label>
      )}
      <input
        id={id}
        className={`w-full rounded-lg border border-border-custom bg-white px-4 py-2.5 text-text-primary transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary ${
          error ? 'border-red-500 ring-red-500' : ''
        } ${className}`}
        {...props}
      />
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
};

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: { value: string; label: string }[];
}

export const Select: React.FC<SelectProps> = ({ label, options, className = '', id, ...props }) => {
  return (
    <div className="w-full space-y-1.5">
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-text-primary">
          {label}
        </label>
      )}
      <select
        id={id}
        className={`w-full rounded-lg border border-border-custom bg-white px-4 py-2.5 text-text-primary transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary ${className}`}
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export const TextArea: React.FC<TextAreaProps> = ({ label, error, className = '', id, ...props }) => {
  return (
    <div className="w-full space-y-1.5">
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-text-primary">
          {label}
        </label>
      )}
      <textarea
        id={id}
        className={`w-full rounded-lg border border-border-custom bg-white px-4 py-2.5 text-text-primary transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary ${
          error ? 'border-red-500 ring-red-500' : ''
        } ${className}`}
        {...props}
      />
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
};
