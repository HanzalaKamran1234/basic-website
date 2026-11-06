import { ContactForm } from '../../components/ContactForm';

export const metadata = {
  title: 'Contact — SPOGMAI',
  description: 'Get in touch with SPOGMAI. Sizing advice, order enquiries, and more.',
};

export default function ContactPage() {
  return (
    <div className="bg-background min-h-screen">

      {/* Header */}
      <div className="bg-primaryBlack text-white pt-32 pb-16">
        <div className="container mx-auto px-6">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-accent mb-3">
            Reach Out
          </p>
          <h1 className="font-heading text-6xl md:text-7xl">Contact Us</h1>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-16 max-w-5xl mx-auto">

          {/* Contact Info */}
          <div className="md:col-span-2 space-y-10">
            <div>
              <p className="font-body text-xs tracking-[0.2em] uppercase text-accent mb-4">
                Customer Support
              </p>
              <div className="space-y-3">
                <div>
                  <p className="font-body text-xs text-secondaryText uppercase tracking-wider mb-0.5">Email</p>
                  <p className="font-body text-sm text-primaryBlack">hello@spogmai.com</p>
                  <p className="font-body text-xs text-secondaryText/60">(Demo — not monitored)</p>
                </div>
                <div>
                  <p className="font-body text-xs text-secondaryText uppercase tracking-wider mb-0.5">Phone</p>
                  <p className="font-body text-sm text-primaryBlack">+92 XXX XXX XXXX</p>
                  <p className="font-body text-xs text-secondaryText/60">(Placeholder — not active)</p>
                </div>
                <div>
                  <p className="font-body text-xs text-secondaryText uppercase tracking-wider mb-0.5">Hours</p>
                  <p className="font-body text-sm text-primaryBlack">Mon–Sat, 10am–6pm PKT</p>
                  <p className="font-body text-xs text-secondaryText/60">(Placeholder)</p>
                </div>
              </div>
            </div>

            <div>
              <p className="font-body text-xs tracking-[0.2em] uppercase text-accent mb-4">
                Delivery
              </p>
              <p className="font-body text-sm text-secondaryText leading-relaxed">
                We deliver across Pakistan. Cash on Delivery available. Standard delivery 3–7 business days.
              </p>
              <p className="font-body text-xs text-secondaryText/60 mt-2">(Demo information — not confirmed)</p>
            </div>

            <div>
              <p className="font-body text-xs tracking-[0.2em] uppercase text-accent mb-4">
                Follow Us
              </p>
              <div className="flex gap-4">
                {['Instagram', 'Facebook', 'TikTok'].map((platform) => (
                  <a
                    key={platform}
                    href="#"
                    className="font-body text-xs text-secondaryText hover:text-primaryBlack border-b border-current pb-0.5 transition-colors"
                  >
                    {platform}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-3 bg-white p-8 md:p-10">
            <h2 className="font-heading text-3xl text-primaryBlack mb-8">Send a Message</h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
