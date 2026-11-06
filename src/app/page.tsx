import { Hero } from '@/components/Hero';

export default function Home() {
  return (
    <div className="flex flex-col gap-12">
      {/* Hero */}
      <Hero />

      {/* Featured Collections */}
      <section className="container mx-auto px-4">
        <h2 className="font-heading text-3xl mb-4 text-center">Featured Collections</h2>
        <p className="text-center text-secondaryText">Explore our curated selections.</p>
        {/* Placeholder grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="bg-white rounded-lg shadow p-6 text-center">Collection 1</div>
          <div className="bg-white rounded-lg shadow p-6 text-center">Collection 2</div>
          <div className="bg-white rounded-lg shadow p-6 text-center">Collection 3</div>
        </div>
      </section>

      {/* Best‑selling */}
      <section className="bg-background py-12">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl mb-4 text-center">Best‑selling Products</h2>
          <p className="text-center text-secondaryText">Our customers love these.</p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="bg-white rounded-lg shadow p-6 text-center">Product {i + 1}</div>
            ))}
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="container mx-auto px-4">
        <h2 className="font-heading text-3xl mb-4 text-center">New Arrivals</h2>
        <p className="text-center text-secondaryText">Fresh styles just in.</p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="bg-white rounded-lg shadow p-6 text-center">New {i + 1}</div>
          ))}
        </div>
      </section>

      {/* Brand Story */}
      <section className="bg-primaryBlack text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl mb-4">Our Story</h2>
          <p className="max-w-2xl mx-auto">
            SPOGMAI was born from a passion for timeless, modern menswear. Every piece is crafted with the highest quality materials, designed for the confident man who values heritage and style.
          </p>
        </div>
      </section>

      {/* Editorial Campaign */}
      <section className="relative h-64 md:h-96">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1600&q=80"
            alt="Editorial fashion shot"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative flex items-center justify-center h-full">
          <h2 className="font-heading text-4xl md:text-5xl text-primaryBlack">Seasonal Campaign</h2>
        </div>
      </section>

      {/* Why Choose */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="font-heading text-3xl mb-6 text-center">Why Choose SPOGMAI</h2>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <li>
            <h3 className="font-heading text-xl mb-2">Premium Quality</h3>
            <p className="text-secondaryText">Only the finest fabrics.</p>
          </li>
          <li>
            <h3 className="font-heading text-xl mb-2">Timeless Design</h3>
            <p className="text-secondaryText">Styles that endure.</p>
          </li>
          <li>
            <h3 className="font-heading text-xl mb-2">Sustainable</h3>
            <p className="text-secondaryText">Ethically sourced materials.</p>
          </li>
        </ul>
      </section>

      {/* Testimonials */}
      <section className="bg-background py-12">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl mb-6 text-center">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <blockquote className="p-6 bg-white rounded shadow">
              <p className="text-lg">“The fit and feel are unmatched. SPOGMAI has become my go‑to brand.”</p>
              <cite className="block mt-4 text-right font-medium">– Alex R.</cite>
            </blockquote>
            <blockquote className="p-6 bg-white rounded shadow">
              <p className="text-lg">“Elegant, modern, and always comfortable. Highly recommend.”</p>
              <cite className="block mt-4 text-right font-medium">– Jamal K.</cite>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-primaryBlack text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl mb-4">Stay Updated</h2>
          <p className="mb-6">Subscribe to receive the latest launches and offers.</p>
          <form className="flex flex-col md:flex-row justify-center gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email"
              className="px-4 py-2 rounded-md text-primaryBlack flex-1"
              required
            />
            <button type="submit" className="bg-white text-primaryBlack font-medium py-2 px-4 rounded-md hover:bg-gray-200">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Instagram */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="font-heading text-3xl mb-6 text-center">Follow Us on Instagram</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[...Array(8)].map((_, i) => (
            <img
              key={i}
              src={`https://images.unsplash.com/photo-1520975301238-0e7c2c9a5b57?auto=format&fit=crop&w=400&q=60&rand=${i}`}
              alt="Instagram placeholder"
              className="w-full h-48 object-cover rounded"
            />
          ))}
        </div>
      </section>
    </div>
  );
}
