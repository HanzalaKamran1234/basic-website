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
      <div className="text-center py-4">
        <p className="font-heading text-2xl text-white mb-2">Thank you.</p>
        <p className="font-body text-white/60 text-sm">
          You&apos;re on the list. We&apos;ll be in touch. <span className="text-accent">(Demo — no backend connected yet.)</span>
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="flex flex-col sm:flex-row justify-center gap-0 max-w-md mx-auto">
        <input
          type="email"
          value={email}
          onChange={(e) => { setEmail(e.target.value); setStatus('idle'); }}
          placeholder="Your email address"
          required
          className={`flex-1 px-5 py-4 bg-white/10 border text-white placeholder-white/40 font-body text-sm focus:outline-none focus:border-accent transition-colors ${
            status === 'error' ? 'border-red-400' : 'border-white/20'
          }`}
        />
        <button
          type="submit"
          className="bg-accent text-white hover:bg-white hover:text-primaryBlack transition-colors font-body font-medium tracking-[0.2em] uppercase text-xs py-4 px-8 shrink-0"
        >
          Subscribe
        </button>
      </div>
      {status === 'error' && (
        <p className="font-body text-red-400 text-xs text-center mt-2">
          Please enter a valid email address.
        </p>
      )}
      <p className="font-body text-white/30 text-xs text-center mt-3">
        Demo only — form submissions are not stored or processed.
      </p>
    </form>
  );
};
