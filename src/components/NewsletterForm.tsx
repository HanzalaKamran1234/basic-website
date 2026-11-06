"use client";

import { useState } from 'react';

export const NewsletterForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitted' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setStatus('error');
      return;
    }
    setStatus('submitted');
    setEmail('');
  };

  if (status === 'submitted') {
    return (
      <div className="text-center py-space-md bg-surface-container border border-outline-variant/30 p-space-lg">
        <span className="font-label-caps-sm text-label-caps-sm text-tertiary tracking-widest uppercase block mb-1">
          PRIVILEGE REGISTERED (DEMO)
        </span>
        <p className="font-headline-sm text-headline-sm text-on-surface mb-2">
          Thank you for your interest.
        </p>
        <p className="font-body-sm text-body-sm text-on-surface-variant max-w-sm mx-auto">
          Demo storefront notice: No emails are recorded or distributed. Live subscription services are currently offline.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="max-w-md mx-auto space-y-space-xs">
      <div className="flex flex-col sm:flex-row items-center gap-space-sm">
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setStatus('idle');
          }}
          placeholder="Enter your email address"
          required
          className="w-full bg-primary-container px-space-md py-space-md border border-outline-variant/30 text-on-surface placeholder:text-on-surface-variant/40 font-body-sm text-body-sm focus:outline-none focus:border-tertiary transition-colors"
        />
        <button
          type="submit"
          className="w-full sm:w-auto flex-shrink-0 px-space-lg py-space-md bg-tertiary text-on-tertiary font-label-caps-md text-label-caps-md tracking-[0.2em] uppercase transition-colors hover:bg-primary-fixed"
        >
          JOIN ATELIER
        </button>
      </div>
      {status === 'error' && (
        <p className="font-caption text-caption text-error tracking-wider uppercase text-left pt-1">
          Please enter a valid email address.
        </p>
      )}
      <p className="font-caption text-caption text-on-surface-variant/60 tracking-wider uppercase pt-space-xs text-center">
        DISCREET COMMUNICATIONS ONLY. DEMO FRONTEND NOTICE: SUBSCRIPTIONS ARE NOT STORED.
      </p>
    </form>
  );
};
