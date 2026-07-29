'use client';

import { useEffect, useId, useRef, type ReactNode } from 'react';
import { CloseIcon } from '@/components/ui/icons';

interface ModalProps {
  open: boolean;
  title: string;
  closeLabel: string;
  onClose: () => void;
  children: ReactNode;
}

export function Modal({ open, title, closeLabel, onClose, children }: ModalProps) {
  const titleId = useId();
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleKeyDown);
    closeButtonRef.current?.focus();

    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      className="fixed inset-0 z-100 flex items-center justify-center p-6"
    >
      <button
        type="button"
        aria-label={closeLabel}
        onClick={onClose}
        className="absolute inset-0 cursor-default bg-night/80 backdrop-blur-sm"
      />
      <div className="relative w-full max-w-lg rounded-card border border-line bg-navy p-8 shadow-2xl">
        <div className="flex items-start justify-between gap-6">
          <h2 id={titleId} className="text-xl font-semibold tracking-tight">
            {title}
          </h2>
          <button
            ref={closeButtonRef}
            type="button"
            aria-label={closeLabel}
            onClick={onClose}
            className="flex size-9 items-center justify-center rounded-full border border-line text-ink-muted transition-colors duration-300 hover:text-brand"
          >
            <CloseIcon />
          </button>
        </div>
        <div className="mt-6 text-ink-muted">{children}</div>
      </div>
    </div>
  );
}
