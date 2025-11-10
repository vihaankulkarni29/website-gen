import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'charcoal-black': '#2B2B2B',
        'espresso-brown': '#4B2E2B',
        'concrete-gray': '#A8A29E',
        'cream-white': '#F5F0EB',
        'muted-copper': '#B87333',
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'inter': ['Inter', 'sans-serif'],
        'space-grotesk': ['Space Grotesk', 'sans-serif'],
      },
      fontSize: {
        'hero-clamp': 'clamp(2rem, 5vw, 3.5rem)',
        'responsive-p': 'clamp(1rem, 2vw, 1.2rem)',
      },
      spacing: {
        'section-py': '60px',
        'heading-mb': '20px',
        'paragraph-mb': '30px',
      },
      maxWidth: {
        'readable': '700px',
      },
      backgroundImage: {
        'hero-pattern': "url('/coffee-shop-hero-interior.avif')",
        'experience-pattern': "url('/experience-barista-pouring-coffee.avif')",
      },
    },
  },
  plugins: [],
}
export default config