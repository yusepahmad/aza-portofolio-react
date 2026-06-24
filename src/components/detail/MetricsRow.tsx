import type { Metric } from '../../data/content';

export default function MetricsRow({ metrics }: { metrics: Metric[] }) {
  if (!metrics.length) return null;
  return (
    <div className="pd-metrics">
      {metrics.map((m) => (
        <div className="pd-metric" key={m.label}>
          <span className="pd-metric-value">{m.value}</span>
          <span className="pd-metric-label">{m.label}</span>
        </div>
      ))}
    </div>
  );
}
