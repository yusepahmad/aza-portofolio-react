import Reveal from './Reveal';
import { workHistory } from '../data/content';

const delays = [undefined, 1, 2, 3, 4, 5] as const;

export default function Work() {
  return (
    <section id="work" className="sec-wrap">
      <div className="wrap">
        <div className="sec-hd">
          <Reveal className="sec-tag">03 — experience</Reveal>
          <Reveal as="h2" delay={1} className="sec-title">
            Work <span className="teal">history.</span>
          </Reveal>
        </div>
        <div className="work-list">
          {workHistory.map((row, i) => (
            <Reveal key={row.role + row.dateFrom} delay={delays[i]} className="wrow">
              <div className="wd">
                {row.dateFrom}
                <br />→ {row.isPresent ? <span className="now">present</span> : row.dateTo}
              </div>
              <div>
                <div className="wr-role">
                  {row.role}
                  {row.roleNote && <em>{row.roleNote}</em>}
                </div>
                <div className="wr-co">
                  {row.pill && <span className="pill">{row.pill}</span>}
                  {row.company}
                </div>
                <div className="wr-desc">{row.description}</div>
              </div>
              <div className="wt">
                {row.tags.map((tag, idx) => (
                  <span key={tag}>
                    {idx === 0 ? <span className="hi">{tag}</span> : tag}
                    {idx < row.tags.length - 1 && <br />}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
