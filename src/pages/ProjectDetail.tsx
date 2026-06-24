import type { ComponentType } from 'react';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Orbs from '../components/Orbs';
import { getProjectBySlug, getAdjacentProjects, type ProjectPageData } from '../data/projectLookup';
import {
  ConnectionTopologySvg,
  KafkaStreamingSvg,
  EtlArchitectureSvg,
  CredentialVaultSvg,
  AgentPipelineSvg,
  KeywordFanoutSvg,
  LifecycleSchedulerSvg,
  YoutubeCrawlerSvg,
  PlaywrightBrowserSvg,
  FacebookCrawlerSvg,
  RapidApiDualCrawlerSvg,
  ThreadsCrawlerSvg,
  FanoutRouterSvg,
} from '../components/ProjectVisuals';
import type { ProjectVisualKey } from '../data/content';
import TabOverview from '../components/detail/TabOverview';
import TabArchitecture from '../components/detail/TabArchitecture';
import TabPipeline from '../components/detail/TabPipeline';
import TabComponents from '../components/detail/TabComponents';
import TabReliability from '../components/detail/TabReliability';
import TabTechStack from '../components/detail/TabTechStack';

const visualMap: Record<ProjectVisualKey, ComponentType> = {
  connection: ConnectionTopologySvg,
  kafka: KafkaStreamingSvg,
  etl: EtlArchitectureSvg,
  vault: CredentialVaultSvg,
  agentpipeline: AgentPipelineSvg,
  keywordfanout: KeywordFanoutSvg,
  lifecyclescheduler: LifecycleSchedulerSvg,
  youtubecrawler: YoutubeCrawlerSvg,
  playwrightbrowser: PlaywrightBrowserSvg,
  facebookcrawler: FacebookCrawlerSvg,
  rapidapidual: RapidApiDualCrawlerSvg,
  threadscrawler: ThreadsCrawlerSvg,
  fanoutrouter: FanoutRouterSvg,
};

type TabKey = 'overview' | 'architecture' | 'pipeline' | 'components' | 'reliability' | 'stack';

const tabs: { key: TabKey; label: string }[] = [
  { key: 'overview', label: 'Overview' },
  { key: 'architecture', label: 'Architecture' },
  { key: 'pipeline', label: 'Pipeline' },
  { key: 'components', label: 'Components' },
  { key: 'reliability', label: 'Reliability' },
  { key: 'stack', label: 'Tech Stack' },
];

function TabPanel({ tab, project }: { tab: TabKey; project: ProjectPageData }) {
  switch (tab) {
    case 'overview':
      return <TabOverview project={project} />;
    case 'architecture':
      return <TabArchitecture project={project} />;
    case 'pipeline':
      return <TabPipeline project={project} />;
    case 'components':
      return <TabComponents project={project} />;
    case 'reliability':
      return <TabReliability project={project} />;
    case 'stack':
      return <TabTechStack project={project} />;
  }
}

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;
  const [tab, setTab] = useState<TabKey>('overview');

  if (!project) {
    return (
      <>
        <Orbs />
        <section className="sec-wrap">
          <div className="wrap">
            <p className="pd-back">
              <Link to="/">← Back to portfolio</Link>
            </p>
            <h1 className="sec-title">Project not found.</h1>
          </div>
        </section>
      </>
    );
  }

  const Visual = project.visual ? visualMap[project.visual] : undefined;
  const { prev, next } = getAdjacentProjects(project.index);

  return (
    <>
      <Orbs />

      <div className="pd-hero" style={{ background: project.gradient ?? 'linear-gradient(145deg,#0d1220,#070a14)' }}>
        {Visual && (
          <div className="pd-hero-visual">
            <Visual />
          </div>
        )}
        <div className="pd-hero-overlay" />
        <div className="wrap pd-hero-content">
          <p className="pd-back">
            <Link to="/">← Back to portfolio</Link>
          </p>
          <div className="pd-hero-bottom">
            <div className="pm pd-meta">
              <span className="pt">{project.type}</span>
              <span className="py">{project.year}</span>
              {project.numLabel && <span className="pd-num">{project.numLabel}</span>}
            </div>
            <h1 className="pd-title">{project.title}</h1>
            <p className="pd-tagline">{project.tagline}</p>
            {project.link && (
              <a className="p-link pd-gh-link" href={project.link} target="_blank" rel="noopener noreferrer">
                View on GitHub →
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="pd-tabbar-wrap">
        <div className="wrap">
          <div className="pd-tabbar">
            {tabs.map((t) => (
              <button
                key={t.key}
                type="button"
                className={`pd-tab${tab === t.key ? ' on' : ''}`}
                onClick={() => setTab(t.key)}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <section className="sec-wrap pd-wrap">
        <div className="wrap">
          <TabPanel tab={tab} project={project} />

          <div className="pd-nav">
            <Link className="pd-nav-link pd-nav-prev" to={`/projects/${prev.slug}`}>
              <span className="pd-nav-dir">← Previous</span>
              <span className="pd-nav-title">{prev.title}</span>
            </Link>
            <Link className="pd-nav-link pd-nav-next" to={`/projects/${next.slug}`}>
              <span className="pd-nav-dir">Next →</span>
              <span className="pd-nav-title">{next.title}</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
