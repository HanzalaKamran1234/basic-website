import { ContactForm } from '../../components/ContactForm';

export const metadata = {
  title: 'Client Relations & Inquiries — SPOGMAI',
  description: 'Connect with SPOGMAI client services. Inquiries regarding sizing, garment specifications, and orders.',
};

export default function ContactPage() {
  return (
    <div className="bg-surface min-h-screen text-on-surface flex flex-col">
      {/* ── Page Header ────────────────────────────────────── */}
      <section className="w-full bg-primary-container border-b border-outline-variant/20 pt-36 pb-16 px-margin md:px-margin-desktop">
        <div className="max-w-4xl space-y-space-xs">
          <span className="font-label-caps-sm text-label-caps-sm text-tertiary uppercase tracking-[0.28em] block">
            CLIENT SERVICES
          </span>
          <h1 className="font-display-hero text-headline-lg md:text-[68px] md:leading-[76px] text-primary-fixed font-normal tracking-tight">
            Client Relations
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant font-light max-w-xl pt-1">
            We are dedicated to providing refined assistance for all garment inquiries, sizing consultations, and archive orders.
          </p>
        </div>
      </section>

      {/* ── Contact Layout ──────────────────────────────────── */}
      <section className="w-full px-margin md:px-margin-desktop py-space-xl flex-1">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-start">

          {/* Left Column: Direct Inquiries (5 cols) */}
          <div className="lg:col-span-5 space-y-space-lg bg-surface-container-low border border-outline-variant/20 p-space-xl">
            <div className="space-y-space-xs">
              <span className="font-label-caps-sm text-label-caps-sm text-tertiary uppercase tracking-wider block">
                CLIENT SERVICES
              </span>
              <h2 className="font-headline-sm text-headline-sm text-on-surface font-normal">
                Direct Communication
              </h2>
              <p className="font-body-sm text-body-sm text-on-surface-variant font-light leading-relaxed">
                Our client advisory team assists with garment specifications, silhouette consultations, and order details.
              </p>
            </div>

            <div className="space-y-space-md border-t border-outline-variant/20 pt-space-md font-body-sm text-body-sm">
              <div className="space-y-0.5">
                <span className="font-label-caps-sm text-label-caps-sm text-on-surface-variant tracking-wider uppercase block">
                  ELECTRONIC CORRESPONDENCE
                </span>
                <p className="text-on-surface font-light">
                  concierge@spogmai.com
                </p>
                <span className="font-caption text-caption text-tertiary/70 uppercase">
                  (DEMO SPECIFICATION — NOT MONITORED)
                </span>
              </div>

              <div className="space-y-0.5">
                <span className="font-label-caps-sm text-label-caps-sm text-on-surface-variant tracking-wider uppercase block">
                  CLIENT ADVISORY
                </span>
                <p className="text-on-surface font-light">
                  Online inquiries are received through the client form below.
                </p>
                <span className="font-caption text-caption text-tertiary/70 uppercase">
                  (DEMO STOREFRONT MODE)
                </span>
              </div>

              <div className="space-y-0.5">
                <span className="font-label-caps-sm text-label-caps-sm text-on-surface-variant tracking-wider uppercase block">
                  FULFILLMENT &amp; LOGISTICS
                </span>
                <p className="text-on-surface font-light leading-relaxed">
                  Shipping, delivery options, and payment processing details will be confirmed upon full commercial launch.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Form (7 cols) */}
          <div className="lg:col-span-7 bg-surface-container border border-outline-variant/30 p-space-xl space-y-space-md">
            <div>
              <span className="font-label-caps-sm text-label-caps-sm text-tertiary uppercase tracking-widest block mb-1">
                TRANSMIT INQUIRY
              </span>
              <h2 className="font-headline-sm text-headline-sm text-primary-fixed font-normal">
                Direct Client Message
              </h2>
            </div>

            <ContactForm />
          </div>

        </div>
      </section>
    </div>
  );
}
