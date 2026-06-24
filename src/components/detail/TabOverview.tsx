import type { ProjectPageData } from '../../data/projectLookup';
import MetricsRow from './MetricsRow';

export default function TabOverview({ project }: { project: ProjectPageData }) {
  return (
    <div className="pd-tab-panel">
      <MetricsRow metrics={project.metrics} />

      <div className="pd-section">
        <h2 className="pd-h2">What it is</h2>
        <p className="pd-p">{project.overview}</p>
      </div>

      <div className="pd-section">
        <h2 className="pd-h2">Stack at a glance</h2>
        <div className="p-stack pd-stack">
          {project.stack.map((s) => (
            <span key={s}>{s}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
