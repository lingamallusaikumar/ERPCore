import React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
  helperText?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(({
  label,
  error,
  icon,
  helperText,
  className = '',
  id,
  ...props
}, ref) => {
  const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

  return (
    <div className="w-full flex flex-col gap-1.5">
      {label && (
        <label htmlFor={inputId} className="text-xs font-semibold text-gray-300 uppercase tracking-wider">
          {label} {props.required && <span className="text-rose-500">*</span>}
        </label>
      )}
      <div className="relative flex items-center">
        {icon && <div className="absolute left-3 text-gray-400 pointer-events-none">{icon}</div>}
        <input
          ref={ref}
          id={inputId}
          className={`w-full bg-gray-900 border text-sm text-gray-100 rounded-lg px-3 py-2 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            icon ? 'pl-9' : ''
          } ${error ? 'border-rose-500 focus:ring-rose-500' : 'border-gray-700 hover:border-gray-600'} ${className}`}
          {...props}
        />
      </div>
      {error && <p className="text-xs text-rose-400 font-medium">{error}</p>}
      {helperText && !error && <p className="text-xs text-gray-500">{helperText}</p>}
    </div>
  );
});

Input.displayName = 'Input';
