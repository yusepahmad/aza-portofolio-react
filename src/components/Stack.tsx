import Reveal from './Reveal';
import { stackCards } from '../data/content';

const delays = [undefined, 1, 2, 3, 4, 5] as const;

export default function Stack() {
  return (
    <section id="stack" className="sec-wrap">
      <div className="wrap">
        <div className="sec-hd">
          <Reveal className="sec-tag">02 — tech stack</Reveal>
          <Reveal as="h2" delay={1} className="sec-title">
            Tools I use <span className="teal">daily.</span>
          </Reveal>
        </div>
        <div className="stack-grid">
          {stackCards.map((card, i) => (
            <Reveal key={card.title} delay={delays[i]} className="sk-card glass">
              <span className="sk-cat">{card.category}</span>
              <h4>{card.title}</h4>
              <div className="sk-tools">
                {card.tools.map((tool) => (
                  <span key={tool}>{tool}</span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
