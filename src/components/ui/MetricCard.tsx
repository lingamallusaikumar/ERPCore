import React from 'react';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

export interface MetricCardProps {
  title: string;
  value: string | number;
  change?: number;
  changeLabel?: string;
  icon: React.ReactNode;
  subtitle?: string;
}

export const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  change,
  changeLabel = 'vs last period',
  icon,
  subtitle
}) => {
  const isPositive = change !== undefined && change > 0;
  const isNegative = change !== undefined && change < 0;

  return (
    <div className="glass-panel rounded-xl p-5 shadow-lg relative kpi-card-glow hover:border-gray-600 transition-all">
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">{title}</span>
        <div className="p-2.5 rounded-lg bg-blue-950/50 text-blue-400 border border-blue-800/40">
          {icon}
        </div>
      </div>
      <div className="mt-3">
        <h3 className="text-2xl font-bold text-gray-100 tracking-tight">{value}</h3>
        {subtitle && <p className="text-xs text-gray-400 mt-0.5">{subtitle}</p>}
        {change !== undefined && (
          <div className="flex items-center gap-1.5 mt-2 text-xs font-medium">
            {isPositive && (
              <span className="flex items-center text-emerald-400 bg-emerald-950/60 px-1.5 py-0.5 rounded border border-emerald-800/40">
                <TrendingUp className="w-3.5 h-3.5 mr-0.5" /> +{change}%
              </span>
            )}
            {isNegative && (
              <span className="flex items-center text-rose-400 bg-rose-950/60 px-1.5 py-0.5 rounded border border-rose-800/40">
                <TrendingDown className="w-3.5 h-3.5 mr-0.5" /> {change}%
              </span>
            )}
            {!isPositive && !isNegative && (
              <span className="flex items-center text-gray-400 bg-gray-800 px-1.5 py-0.5 rounded">
                <Minus className="w-3.5 h-3.5 mr-0.5" /> 0%
              </span>
            )}
            <span className="text-gray-500">{changeLabel}</span>
          </div>
        )}
      </div>
    </div>
  );
};
