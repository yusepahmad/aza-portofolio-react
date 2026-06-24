import type { ProjectPageData } from '../../data/projectLookup';

export default function TabComponents({ project }: { project: ProjectPageData }) {
  return (
    <div className="pd-tab-panel">
      <div className="pd-section pd-section-first">
        <h2 className="pd-h2">Components</h2>
        <div className="pd-components">
          {project.components.map((c) => (
            <div className="pd-component glass" key={c.name}>
              <div className="pd-component-tag">{c.tag}</div>
              <div className="pd-component-body">
                <div className="pd-component-name">{c.name}</div>
                <div className="pd-component-role">{c.role}</div>
                <div className="pd-component-tech">{c.tech}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
