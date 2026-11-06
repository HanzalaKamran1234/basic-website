// tailwind.config.ts – custom design system for SPOGMAI
import type { Config } from 'tailwindcss';

const config: Config = {
  // All files that use Tailwind classes
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primaryBlack: '#080808', // dominant colour
        secondaryBlack: '#151515',
        background: '#F5F3EF',
        secondaryText: '#777777',
        accent: '#B8A58A', // muted champagne
      },
      fontFamily: {
        heading: ['Cormorant Garamond', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
