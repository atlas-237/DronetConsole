export type MetricTone = 'ok' | 'warn' | 'danger';
export type MetricValue = string | number | null | undefined;

export interface MetricItem {
  key?: string;
  label?: string;
  value?: MetricValue;
  unit?: string;
  tone?: MetricTone;
  infoTooltip?: string;
  help?: string;
}

export interface MetricsGridProps {
  items?: MetricItem[];
  metrics?: MetricItem[];
  className?: string;
}
