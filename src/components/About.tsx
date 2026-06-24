import Reveal from './Reveal';
import { infoRows } from '../data/content';

export default function About() {
  return (
    <section id="about" className="sec-wrap">
      <div className="wrap">
        <div className="sec-hd">
          <Reveal className="sec-tag">01 — about</Reveal>
          <Reveal as="h2" delay={1} className="sec-title">
            Who I <span className="teal">am.</span>
          </Reveal>
        </div>
        <div className="about-cols">
          <div>
            <Reveal as="p" className="about-quote">
              I build pipelines that quietly handle the parts of the internet nobody wants to deal with manually.
            </Reveal>
            <Reveal delay={1} className="about-prose">
              <p>
                I started as a back-end engineer — writing APIs, wiring services, making things talk to each
                other. Around 2024 I drifted fully into data: specifically the unglamorous work of fetching,
                cleaning, and routing high-volume streams from social media and web platforms into something
                analytics teams can actually rely on.
              </p>
              <p>
                Today I work as an <strong>AI-Native Crawling Specialist at PT eBdesk Teknologi</strong>, where I
                own ingestion and ETL workflows that feed the company's analytics layer — increasingly designed
                around AI-native crawling patterns instead of brittle, hand-tuned scrapers. Before that I led the
                data acquisition team for a year — which mostly taught me that patience and retry logic are
                essentially the same thing.
              </p>
              <p>
                I'm also studying <strong>Computer Science at Universitas Pelita Harapan</strong>, focused on AI
                and cybersecurity — specifically anomaly detection and adversarial ML. When I'm not in a
                terminal, you'll find me on Instagram as{' '}
                <a href="https://instagram.com/azaa_.py" target="_blank" rel="noopener noreferrer">
                  @azaa_.py
                </a>
                .
              </p>
            </Reveal>
          </div>
          <Reveal delay={2} className="info-card glass">
            {infoRows.map((row) => (
              <div className="ic-row" key={row.key}>
                <span className="ik">{row.key}</span>
                <span className={`iv ${row.teal ? 'teal' : ''}`}>{row.value}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
