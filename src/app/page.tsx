
export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-100 text-gray-900">
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            Welcome to My Site
          </h1>

          <p className="mb-6 text-lg md:text-xl">
            A clean, modern, responsive starter website.
          </p>

          <a
            href="#content"
            className="inline-block rounded bg-blue-600 px-6 py-2 font-medium text-white transition hover:bg-blue-700"
          >
            Learn More
          </a>
        </div>
      </section>

      <section id="content" className="flex-1 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-4 text-3xl font-semibold">
            Simple Content
          </h2>

          <p className="mb-4 text-lg">
            This is a simple and clean website built with Next.js.
          </p>

          <p className="text-lg">
            The website works on desktop, tablet, and mobile devices.
          </p>
        </div>
      </section>

      <footer className="bg-white py-6 text-center text-gray-600">
        © 2026 All rights reserved.
      </footer>
    </div>
  );
}
