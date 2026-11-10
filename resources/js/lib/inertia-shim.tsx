import React, { useState, useEffect } from 'react';

export function Link({
  href,
  children,
  className,
  onClick,
  ...rest
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent) => void;
  [key: string]: any;
}) {
  const handleClick = (e: React.MouseEvent) => {
    if (onClick) onClick(e);
    if (!href) return;
    if (href.startsWith('#')) return; // Native smooth anchor scroll
    if (href.startsWith('http://') || href.startsWith('https://') || href.endsWith('.pdf')) {
      return; // External links and PDFs
    }
    e.preventDefault();
    window.history.pushState({}, '', href);
    window.dispatchEvent(new PopStateEvent('popstate'));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <a href={href} className={className} onClick={handleClick} {...rest}>
      {children}
    </a>
  );
}

export function Head({ title, children }: { title?: string; children?: React.ReactNode }) {
  useEffect(() => {
    if (title) {
      document.title = `${title} — Atik Hasan`;
    }
  }, [title]);

  return <>{children}</>;
}

export function useForm<T extends Record<string, any>>(initialValues: T) {
  const [data, setDataState] = useState<T>(initialValues);
  const [processing, setProcessing] = useState(false);
  const [recentlySuccessful, setRecentlySuccessful] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const setData = (keyOrObj: keyof T | ((prev: T) => T) | T, val?: any) => {
    if (typeof keyOrObj === 'function') {
      setDataState(keyOrObj);
    } else if (typeof keyOrObj === 'object') {
      setDataState(keyOrObj as T);
    } else {
      setDataState((prev) => ({ ...prev, [keyOrObj]: val }));
    }
  };

  const post = (url: string, options?: { onSuccess?: () => void; preserveScroll?: boolean }) => {
    setProcessing(true);
    setTimeout(() => {
      setProcessing(false);
      setRecentlySuccessful(true);
      if (options?.onSuccess) {
        options.onSuccess();
      }
    }, 600);
  };

  const reset = () => {
    setDataState(initialValues);
    setErrors({});
  };

  return {
    data,
    setData,
    post,
    processing,
    errors,
    reset,
    recentlySuccessful,
  };
}

export const router = {
  visit: (url: string) => {
    window.history.pushState({}, '', url);
    window.dispatchEvent(new PopStateEvent('popstate'));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },
  get: (url: string) => {
    window.history.pushState({}, '', url);
    window.dispatchEvent(new PopStateEvent('popstate'));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },
};

