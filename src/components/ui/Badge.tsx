import React from 'react';

export type BadgeVariant = 'success' | 'warning' | 'danger' | 'info' | 'neutral' | 'purple';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  size?: 'sm' | 'md';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'neutral',
  size = 'md',
  className = ''
}) => {
  const variantStyles = {
    success: 'bg-emerald-950/80 text-emerald-400 border-emerald-800/50',
    warning: 'bg-amber-950/80 text-amber-400 border-amber-800/50',
    danger: 'bg-rose-950/80 text-rose-400 border-rose-800/50',
    info: 'bg-blue-950/80 text-blue-400 border-blue-800/50',
    purple: 'bg-purple-950/80 text-purple-400 border-purple-800/50',
    neutral: 'bg-gray-800 text-gray-300 border-gray-700'
  };

  const sizeStyles = {
    sm: 'px-2 py-0.5 text-[10px]',
    md: 'px-2.5 py-1 text-xs'
  };

  return (
    <span className={`inline-flex items-center gap-1 font-medium rounded-md border backdrop-blur-sm ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}>
      <span className="w-1.5 h-1.5 rounded-full bg-current opacity-75"></span>
      {children}
    </span>
  );
};
