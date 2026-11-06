import Link from 'next/link';

const footerNav = {
  shop: [
    { name: 'All Products', href: '/shop' },
    { name: 'T-Shirts', href: '/shop?category=tshirts' },
    { name: 'Pants', href: '/shop?category=pants' },
    { name: 'Formal Shirts', href: '/shop?category=formal' },
    { name: 'New Arrivals', href: '/shop?filter=new' },
    { name: 'Best Sellers', href: '/shop?filter=bestseller' },
  ],
  info: [
    { name: 'Our Story', href: '/about' },
    { name: 'Size Guide', href: '/size-guide' },
    { name: 'Contact', href: '/contact' },
    { name: 'FAQ', href: '/faq' },
  ],
  policies: [
    { name: 'Shipping Policy', href: '/shipping' },
    { name: 'Return Policy', href: '/returns' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms & Conditions', href: '/terms' },
  ],
};

export const Footer: React.FC = () => (
  <footer className="bg-primaryBlack text-white">
    {/* Top section */}
    <div className="container mx-auto px-4 md:px-8 pt-16 pb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

      {/* Brand */}
      <div className="lg:col-span-2">
        <Link href="/" className="font-heading text-3xl tracking-[0.2em] text-white hover:text-accent transition-colors">
          SPOGMAI
        </Link>
        <p className="font-body text-white/50 text-sm leading-relaxed mt-4 max-w-xs">
          Premium men&rsquo;s clothing crafted for the modern gentleman. Quality, heritage, and effortless sophistication — worn every day.
        </p>
        <p className="font-body text-accent/80 text-xs tracking-[0.2em] uppercase mt-5">
          Wear the Legacy.
        </p>
        {/* Social links — placeholder */}
        <div className="flex gap-4 mt-6">
          {['Instagram', 'Facebook', 'Twitter'].map((name) => (
            <a
              key={name}
              href="#"
              aria-label={name}
              className="text-white/40 hover:text-accent font-body text-xs tracking-widest uppercase transition-colors"
            >
              {name}
            </a>
          ))}
        </div>
      </div>

      {/* Shop */}
      <div>
        <h3 className="font-body text-xs font-semibold tracking-[0.2em] uppercase text-white/50 mb-5">Shop</h3>
        <ul className="space-y-3">
          {footerNav.shop.map((link) => (
            <li key={link.name}>
              <Link href={link.href} className="font-body text-sm text-white/70 hover:text-white transition-colors">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Info */}
      <div>
        <h3 className="font-body text-xs font-semibold tracking-[0.2em] uppercase text-white/50 mb-5">Information</h3>
        <ul className="space-y-3">
          {footerNav.info.map((link) => (
            <li key={link.name}>
              <Link href={link.href} className="font-body text-sm text-white/70 hover:text-white transition-colors">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Contact */}
      <div>
        <h3 className="font-body text-xs font-semibold tracking-[0.2em] uppercase text-white/50 mb-5">Contact</h3>
        <ul className="space-y-3 font-body text-sm text-white/70">
          <li>
            <span className="block text-white/40 text-xs uppercase tracking-widest mb-1">Email</span>
            <a href="mailto:info@spogmai.com" className="hover:text-white transition-colors">
              info@spogmai.com
            </a>
          </li>
          <li>
            <span className="block text-white/40 text-xs uppercase tracking-widest mb-1">Phone</span>
            <span className="text-white/50 italic text-xs">Contact details to be added</span>
          </li>
          <li>
            <span className="block text-white/40 text-xs uppercase tracking-widest mb-1">Hours</span>
            <span>Mon–Sat, 10am–7pm</span>
          </li>
        </ul>

        <div className="mt-6">
          <h3 className="font-body text-xs font-semibold tracking-[0.2em] uppercase text-white/50 mb-3">Policies</h3>
          <ul className="space-y-2">
            {footerNav.policies.map((link) => (
              <li key={link.name}>
                <Link href={link.href} className="font-body text-xs text-white/50 hover:text-white/80 transition-colors">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>

    {/* Bottom bar */}
    <div className="border-t border-white/10">
      <div className="container mx-auto px-4 md:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="font-body text-xs text-white/30">
          &copy; 2026 SPOGMAI. All rights reserved.
        </p>
        <p className="font-body text-xs text-white/20 italic">
          All prices and product details shown are demonstration data only.
        </p>
      </div>
    </div>
  </footer>
);
