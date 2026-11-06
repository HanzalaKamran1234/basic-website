"use client";

import { useState } from 'react';

export const ContactForm: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitted' | 'error'>('idle');

  const update = (field: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus('error');
      return;
    }
    setStatus('submitted');
  };

  if (status === 'submitted') {
    return (
      <div className="py-16 text-center">
        <div className="w-14 h-14 border-2 border-accent flex items-center justify-center mx-auto mb-6">
          <span className="text-accent text-2xl">✓</span>
        </div>
        <h3 className="font-heading text-3xl text-primaryBlack mb-3">Message Received</h3>
        <p className="font-body text-secondaryText text-sm leading-relaxed max-w-sm mx-auto">
          Thank you for reaching out. We&apos;ll be in touch shortly.
        </p>
        <p className="font-body text-xs text-secondaryText/50 mt-4">
          Demo — form submissions are not stored or processed.
        </p>
      </div>
    );
  }

  const inputClass =
    'w-full font-body text-sm px-4 py-3.5 bg-white border border-primaryBlack/15 focus:outline-none focus:border-primaryBlack transition-colors placeholder-secondaryText/50';

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      {status === 'error' && (
        <p className="font-body text-xs text-red-500 bg-red-50 px-4 py-3 border border-red-100">
          Please fill in all required fields.
        </p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="font-body text-xs tracking-[0.15em] uppercase text-secondaryText block mb-1.5">
            Full Name *
          </label>
          <input
            type="text"
            value={form.name}
            onChange={update('name')}
            placeholder="Your name"
            className={inputClass}
            required
          />
        </div>
        <div>
          <label className="font-body text-xs tracking-[0.15em] uppercase text-secondaryText block mb-1.5">
            Email Address *
          </label>
          <input
            type="email"
            value={form.email}
            onChange={update('email')}
            placeholder="your@email.com"
            className={inputClass}
            required
          />
        </div>
      </div>

      <div>
        <label className="font-body text-xs tracking-[0.15em] uppercase text-secondaryText block mb-1.5">
          Subject
        </label>
        <select
          value={form.subject}
          onChange={update('subject')}
          className={inputClass}
        >
          <option value="">Select a subject</option>
          <option value="order">Order Enquiry</option>
          <option value="sizing">Sizing Advice</option>
          <option value="returns">Returns & Exchanges</option>
          <option value="wholesale">Wholesale</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label className="font-body text-xs tracking-[0.15em] uppercase text-secondaryText block mb-1.5">
          Message *
        </label>
        <textarea
          value={form.message}
          onChange={update('message')}
          placeholder="How can we help?"
          rows={6}
          className={`${inputClass} resize-none`}
          required
        />
      </div>

      <button
        type="submit"
        className="w-full font-body text-xs tracking-[0.3em] uppercase bg-primaryBlack text-white py-4 hover:bg-secondaryBlack transition-colors"
      >
        Send Message
      </button>
      <p className="font-body text-xs text-secondaryText/50 text-center">
        Demo — form submissions are not stored or processed.
      </p>
    </form>
  );
};
