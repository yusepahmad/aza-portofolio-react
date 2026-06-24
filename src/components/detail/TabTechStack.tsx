import type { ProjectPageData } from '../../data/projectLookup';

export default function TabTechStack({ project }: { project: ProjectPageData }) {
  return (
    <div className="pd-tab-panel">
      <div className="pd-section pd-section-first">
        <h2 className="pd-h2">Tech Stack</h2>
        <div className="pd-tech-groups">
          {project.techGroups.map((group) => (
            <div className="pd-tech-group" key={group.category}>
              <div className="pd-tech-category">{group.category}</div>
              <div className="pd-tech-items">
                {group.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
