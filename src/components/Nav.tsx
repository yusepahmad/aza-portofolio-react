import { navLinks } from '../data/content';
import { scrollToHash } from '../utils/scrollToHash';

export default function Nav() {
  return (
    <header className="nav">
      <div className="wrap nav-inner">
        <a className="nav-logo" href="#" onClick={(e) => e.preventDefault()}>
          Yusep<span className="acc">.</span>
        </a>
        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={scrollToHash}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a className="nav-cta" href="mailto:yusepmuhamadzazuli05@gmail.com">
          Hire me
        </a>
      </div>
    </header>
  );
}
