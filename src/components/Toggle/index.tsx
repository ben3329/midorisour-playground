import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type ToggleProps = {
  title: React.ReactNode;
  defaultOpen?: boolean;
  className?: string;
  children?: React.ReactNode;
};

export default function Toggle({
  title,
  defaultOpen = false,
  className,
  children,
}: ToggleProps) {
  return (
    <details className={clsx(styles.toggle, className)} open={defaultOpen}>
      <summary className={styles.summary}>
        <span className={styles.caret} aria-hidden="true" />
        <span className={styles.title}>{title}</span>
      </summary>
      <div className={styles.content}>{children}</div>
    </details>
  );
}

