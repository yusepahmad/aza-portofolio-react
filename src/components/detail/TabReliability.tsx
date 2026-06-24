import type { ProjectPageData } from '../../data/projectLookup';

export default function TabReliability({ project }: { project: ProjectPageData }) {
  return (
    <div className="pd-tab-panel">
      <div className="pd-section pd-section-first">
        <h2 className="pd-h2">Challenges &amp; Solutions</h2>
        <div className="pd-challenges">
          {project.challenges.map((c) => (
            <div className="pd-challenge glass" key={c.problem}>
              <div className="pd-problem">
                <span className="pd-tag-problem">✕ Problem</span>
                <p>{c.problem}</p>
              </div>
              <div className="pd-solution">
                <span className="pd-tag-solution">✓ Solution</span>
                <p>{c.solution}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="pd-section">
        <h2 className="pd-h2">Results</h2>
        <div className="pd-results-grid">
          {project.results.map((r) => (
            <div className="pd-result-card glass" key={r}>
              <p>{r}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
