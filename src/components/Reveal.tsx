import type { ElementType, ReactNode } from 'react';
import { useReveal } from '../hooks/useReveal';

type RevealProps = {
  as?: ElementType;
  delay?: 1 | 2 | 3 | 4 | 5;
  className?: string;
  children: ReactNode;
  [key: string]: unknown;
};

export default function Reveal({ as: Tag = 'div', delay, className = '', children, ...rest }: RevealProps) {
  const ref = useReveal<HTMLElement>();
  const cls = `rv ${className}`.trim();

  return (
    <Tag ref={ref} className={cls} data-d={delay} {...rest}>
      {children}
    </Tag>
  );
}
