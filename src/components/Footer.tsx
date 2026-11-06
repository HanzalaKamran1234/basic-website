import Link from 'next/link';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-secondaryBlack text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
        <div>
          <h3 className="font-heading text-xl mb-2">SPOGMAI</h3>
          <p className="text-sm text-secondaryText">
            Premium men’s fashion. Wear the legacy.
          </p>
        </div>
        <div>
          <h4 className="font-heading text-lg mb-2">Quick Links</h4>
          <ul className="space-y-1">
            <li><Link href="/" className="hover:text-accent transition-colors">Home</Link></li>
            <li><Link href="/shop" className="hover:text-accent transition-colors">Shop</Link></li>
            <li><Link href="/about" className="hover:text-accent transition-colors">About</Link></li>
            <li><Link href="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-heading text-lg mb-2">Contact</h4>
          <p className="text-sm text-secondaryText">Email: info@spogmai.com</p>
          <p className="text-sm text-secondaryText">Phone: +1 555 123 4567</p>
        </div>
      </div>
      <div className="text-center text-xs text-secondaryText mt-6">
        &copy; 2026 SPOGMAI. All rights reserved.
      </div>
    </footer>
  );
};
