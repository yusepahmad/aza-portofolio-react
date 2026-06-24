import type { ProjectPageData } from '../../data/projectLookup';

export default function TabPipeline({ project }: { project: ProjectPageData }) {
  return (
    <div className="pd-tab-panel">
      {project.pipelineTracks.map((track) => (
        <div className="pd-section pd-section-first" key={track.name}>
          <h2 className="pd-h2">{track.name}</h2>
          <div className="pd-pipeline">
            {track.steps.map((step, i) => (
              <div className="pd-step" key={step.label}>
                <div className="pd-step-rail">
                  <div className="pd-step-num">{String(i + 1).padStart(2, '0')}</div>
                  {i < track.steps.length - 1 && <div className="pd-step-line" />}
                </div>
                <div className="pd-step-card glass">
                  <div className="pd-step-label">{step.label}</div>
                  <div className="pd-step-detail">{step.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
