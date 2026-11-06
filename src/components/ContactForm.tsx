"use client";

import { useState } from 'react';

export const ContactForm: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitted' | 'error'>('idle');

  const update = (field: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    if (status === 'error') setStatus('idle');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus('error');
      return;
    }
    setStatus('submitted');
  };

  if (status === 'submitted') {
    return (
      <div className="py-space-xl text-center space-y-space-sm border border-outline-variant/30 bg-surface-container-low p-space-xl">
        <div className="w-12 h-12 border border-tertiary flex items-center justify-center mx-auto text-tertiary text-xl mb-space-sm">
          ✓
        </div>
        <h3 className="font-headline-sm text-headline-sm text-primary-fixed font-normal">
          Inquiry Transmitted
        </h3>
        <p className="font-body-sm text-body-sm text-on-surface-variant max-w-sm mx-auto leading-relaxed">
          Thank you for contacting SPOGMAI Client Relations.
        </p>
        <p className="font-caption text-caption text-tertiary tracking-wider uppercase pt-2">
          DEMO STOREFRONT NOTICE: INQUIRY STORED IN CLIENT STATE ONLY. LIVE DISPATCH API IS OFFLINE.
        </p>
      </div>
    );
  }

  const inputClass =
    'w-full font-body-sm text-body-sm px-space-md py-space-sm bg-surface-container-low border border-outline-variant/30 text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none focus:border-tertiary transition-colors';

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-space-md">
      {status === 'error' && (
        <div className="p-space-sm bg-error-container/20 border border-error/30 text-error font-body-sm text-body-sm">
          Please provide your name, valid email address, and message.
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
        <div>
          <label className="font-label-caps-sm text-label-caps-sm uppercase tracking-wider text-on-surface-variant block mb-1">
            CLIENT NAME *
          </label>
          <input
            type="text"
            value={form.name}
            onChange={update('name')}
            placeholder="Full Name"
            className={inputClass}
            required
          />
        </div>

        <div>
          <label className="font-label-caps-sm text-label-caps-sm uppercase tracking-wider text-on-surface-variant block mb-1">
            EMAIL ADDRESS *
          </label>
          <input
            type="email"
            value={form.email}
            onChange={update('email')}
            placeholder="name@domain.com"
            className={inputClass}
            required
          />
        </div>
      </div>

      <div>
        <label className="font-label-caps-sm text-label-caps-sm uppercase tracking-wider text-on-surface-variant block mb-1">
          INQUIRY CLASSIFICATION
        </label>
        <select
          value={form.subject}
          onChange={update('subject')}
          className={inputClass}
        >
          <option value="">Select subject classification</option>
          <option value="sizing">Sizing &amp; Silhouette Guidance</option>
          <option value="order">Order &amp; Dispatch Inquiries</option>
          <option value="returns">Exchange &amp; Returns Consultation</option>
          <option value="general">General Atelier Information</option>
        </select>
      </div>

      <div>
        <label className="font-label-caps-sm text-label-caps-sm uppercase tracking-wider text-on-surface-variant block mb-1">
          MESSAGE CONTENT *
        </label>
        <textarea
          rows={5}
          value={form.message}
          onChange={update('message')}
          placeholder="Describe your request in detail..."
          className={inputClass}
          required
        />
      </div>

      <div className="pt-space-xs">
        <button
          type="submit"
          className="w-full sm:w-auto px-space-xl py-space-md bg-tertiary text-on-tertiary font-label-caps-md text-label-caps-md tracking-[0.2em] uppercase hover:bg-primary-fixed transition-colors"
        >
          TRANSMIT INQUIRY
        </button>
      </div>

      <p className="font-caption text-caption text-on-surface-variant/60 tracking-wider uppercase pt-space-xs">
        DEMO NOTICE: CLIENT-SIDE VALIDATION ONLY. CONFIDENTIAL INQUIRIES WILL BE PROCESSED ONCE LIVE SERVICE LAUNCHES.
      </p>
    </form>
  );
};
