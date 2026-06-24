import Reveal from './Reveal';
import { scrollToHash } from '../utils/scrollToHash';

export default function Hero() {
  return (
    <section className="hero">
      <div className="wrap">
        <div className="hero-grid">
          <div>
            <Reveal className="hero-badge">AI-Native Crawling Specialist · South Tangerang, ID</Reveal>
            <Reveal as="h1" delay={1}>
              Crawl to DB,
              <span className="teal">powered by agents.</span>
            </Reveal>
            <Reveal as="p" delay={2} className="hero-sub">
              Hi, I'm <strong>Yusep</strong> — I build full pipelines end-to-end: from crawling chaotic web and
              social media sources, through AI agents that handle extraction and transformation, all the way
              into clean, query-ready databases. Python, Kafka, Redis, Elasticsearch. Built for production.
              Tuned for reliability.
            </Reveal>
            <Reveal delay={3} className="hero-btns">
              <a className="btn-primary" href="#projects" onClick={scrollToHash}>
                View Projects
              </a>
              <a className="btn-ghost glass" href="#contact" onClick={scrollToHash}>
                Contact me →
              </a>
            </Reveal>
          </div>

          <Reveal delay={2} className="hero-right">
            <div className="hero-photo glass">
              <div className="ph-bg"></div>
              <img className="ph-img" src="/profile.png" alt="Yusep Muhamad Zazuli" />
              <svg viewBox="0 0 300 400" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
                <rect
                  x="12"
                  y="12"
                  width="22"
                  height="22"
                  fill="none"
                  stroke="#00d9a6"
                  strokeOpacity="0.4"
                  strokeWidth="1.5"
                ></rect>
                <rect
                  x="266"
                  y="12"
                  width="22"
                  height="22"
                  fill="none"
                  stroke="#00d9a6"
                  strokeOpacity="0.4"
                  strokeWidth="1.5"
                ></rect>
              </svg>
              <div className="ph-footer">
                <span className="ph-name">Yusep M. Zazuli</span>
                <span className="ph-role">AI-Native Crawling Specialist</span>
              </div>
            </div>

            <div className="scard glass sc1">
              <span className="sc-num">3+</span>
              <span className="sc-lbl">Years Exp</span>
            </div>
            <div className="scard glass sc2">
              <span className="sc-num" style={{ fontSize: '15px', fontWeight: 700 }}>
                Multi-Platform
              </span>
              <span className="sc-lbl">Crawler Fleet</span>
            </div>
            <div className="scard glass sc3">
              <span className="sc-num" style={{ fontSize: '15px', fontWeight: 700 }}>
                Agent Codegen
              </span>
              <span className="sc-lbl">Crawling Expert</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
