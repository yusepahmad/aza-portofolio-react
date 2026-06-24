import type { MouseEvent } from 'react';

export function scrollToHash(e: MouseEvent<HTMLAnchorElement>) {
  const href = e.currentTarget.getAttribute('href');
  if (!href || href.length <= 1) return;

  const el = document.querySelector(href);
  if (!el) return;

  e.preventDefault();
  const top = el.getBoundingClientRect().top + window.scrollY - 76;
  window.scrollTo({ top, behavior: 'smooth' });
}
