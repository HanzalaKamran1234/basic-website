import type { Metadata } from 'next';
import './globals.css';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { AnnouncementBar } from '../components/AnnouncementBar';
import { Providers } from '../components/Providers';
import { ScrollRevealProvider } from '../hooks/useScrollReveal';

export const metadata: Metadata = {
  title: "SPOGMAI — Wear the Legacy",
  description: "Premium men's fashion. Refined menswear designed for the modern man — T-shirts, trousers, and formal shirts.",
  keywords: ['SPOGMAI', 'premium menswear', 'men fashion', 'formal shirts', 'trousers', 'Pakistan'],
  openGraph: {
    title: "SPOGMAI — Wear the Legacy",
    description: "Premium men's fashion for the modern man.",
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts via <link> — do NOT use @import url() inside CSS with Turbopack */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300..700;1,300..700&family=EB+Garamond:ital,wght@0,400..800;1,400..800&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-background">
        <Providers>
          <ScrollRevealProvider>
            <AnnouncementBar />
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </ScrollRevealProvider>
        </Providers>
      </body>
    </html>
  );
}
