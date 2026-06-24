import type { ComponentType } from 'react';
import { Link } from 'react-router-dom';
import Reveal from './Reveal';
import { projects, smallProjects, type ProjectVisualKey } from '../data/content';
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
} from './ProjectVisuals';

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

const delays = [undefined, 1, 2, 3, 4, 5, undefined, 1, undefined, 1, undefined, 1, undefined] as const;

export default function Projects() {
  return (
    <section id="projects" className="sec-wrap">
      <div className="wrap">
        <div className="sec-hd">
          <Reveal className="sec-tag">04 — projects</Reveal>
          <Reveal as="h2" delay={1} className="sec-title">
            Selected <span className="teal">work.</span>
          </Reveal>
        </div>

        <div className="pj-list">
          {projects.map((p, i) => {
            const Visual = visualMap[p.visual];
            return (
              <Reveal
                key={p.title}
                as="article"
                delay={delays[i]}
                className={`pcard glass${p.reversed ? ' rev' : ''}`}
              >
                <div className="pv" style={{ background: p.gradient }}>
                  <Visual />
                  <div className="pv-num">{p.numLabel}</div>
                  <div className="pv-tag">{p.tagLabel}</div>
                </div>
                <div className="pb">
                  <div className="pm">
                    <span className="pt">{p.type}</span>
                    <span className="py">{p.year}</span>
                  </div>
                  <h3>
                    {p.title} <span className="teal">{p.titleAccent}</span>
                  </h3>
                  <p className="p-tagline">{p.tagline}</p>
                  <p className="p-desc">{p.description}</p>
                  <div className="p-impact">
                    <span className="pil">↳ Impact</span>
                    <p>{p.impact}</p>
                  </div>
                  <div className="p-stack">
                    {p.stack.map((s) => (
                      <span key={s}>{s}</span>
                    ))}
                  </div>
                  <div className="p-links">
                    <Link className="p-link" to={`/projects/${p.detail.slug}`}>
                      Read full case study →
                    </Link>
                    {p.link && (
                      <a className="p-link" href={p.link} target="_blank" rel="noopener noreferrer">
                        View on GitHub →
                      </a>
                    )}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <div className="pj-grid">
          {smallProjects.map((p, i) => (
            <Reveal key={p.title} as="article" delay={delays[i]} className="pscard glass">
              <div className="psh">
                <span>{p.type}</span>
                <span className="yr">{p.year}</span>
              </div>
              <h4>{p.title}</h4>
              <p>{p.description}</p>
              <div className="ps-tags">
                {p.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
              <Link className="p-link ps-link" to={`/projects/${p.slug}`}>
                Read full case study →
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
