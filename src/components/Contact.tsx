import Reveal from './Reveal';
import { contactLinks } from '../data/content';

export default function Contact() {
  return (
    <section id="contact" className="contact-sec">
      <div className="wrap">
        <Reveal as="h2" className="contact-h">
          Let's build
          <br />
          something <span className="teal">great.</span>
        </Reveal>
        <div className="contact-cols">
          <Reveal delay={1} className="cl">
            <p>
              I'm open to data engineering roles — on-site, hybrid, or remote. If you're working on ingestion at
              scale, streaming infrastructure, or building a modern data platform, I'd like to hear about it.
            </p>
            <p>I typically reply within 24 hours.</p>
          </Reveal>
          <Reveal delay={2} className="clinks">
            {contactLinks.map((link) => (
              <a
                key={link.key}
                className="clink glass"
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
              >
                <span className="ck">{link.key}</span>
                <span className="cv">{link.value}</span>
                <span className="ca">↗</span>
              </a>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
