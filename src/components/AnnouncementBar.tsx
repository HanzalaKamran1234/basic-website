"use client";

import { useState, useEffect } from 'react';

const messages = [
  'Free delivery on orders over PKR 5,000  ·  Demo offer',
  'New arrivals — The 2026 Collection is here',
  'Cash on Delivery available across Pakistan  ·  Demo',
  'Premium menswear. Wear the Legacy.',
];

export const AnnouncementBar: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % messages.length);
        setVisible(true);
      }, 400);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-primaryBlack text-white py-2.5 text-center overflow-hidden relative z-50">
      <p
        className="font-body text-[10px] tracking-[0.3em] uppercase text-white/70 transition-opacity duration-400"
        style={{ opacity: visible ? 1 : 0 }}
      >
        {messages[index]}
      </p>
    </div>
  );
};
