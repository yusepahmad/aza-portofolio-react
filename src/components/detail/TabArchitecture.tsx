import type { ProjectPageData } from '../../data/projectLookup';

export default function TabArchitecture({ project }: { project: ProjectPageData }) {
  return (
    <div className="pd-tab-panel">
      <div className="pd-section pd-section-first">
        <h2 className="pd-h2">How it's structured</h2>
        <p className="pd-p">{project.architecture}</p>
      </div>

      <div className="pd-section">
        <h2 className="pd-h2">Layers</h2>
        <div className="pd-layers">
          {project.layers.map((layer, i) => (
            <div className="pd-layer" key={layer.name}>
              <div className="pd-layer-index">{String(i + 1).padStart(2, '0')}</div>
              <div className="pd-layer-body">
                <div className="pd-layer-name">{layer.name}</div>
                <div className="pd-layer-detail">{layer.detail}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
