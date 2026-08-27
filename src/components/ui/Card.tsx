import React from 'react';

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
  action?: React.ReactNode;
  glow?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  title,
  subtitle,
  action,
  glow = false
}) => {
  return (
    <div className={`glass-panel rounded-xl p-5 shadow-lg relative ${glow ? 'kpi-card-glow' : ''} ${className}`}>
      {(title || action) && (
        <div className="flex items-center justify-between pb-4 border-b border-gray-800/80 mb-4">
          <div>
            {title && <h3 className="text-base font-semibold text-gray-100 tracking-tight">{title}</h3>}
            {subtitle && <p className="text-xs text-gray-400 mt-0.5">{subtitle}</p>}
          </div>
          {action && <div>{action}</div>}
        </div>
      )}
      {children}
    </div>
  );
};
