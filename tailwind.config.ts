import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          background: '#FFFCF3',
          primary: '#EFBC5C',
          primaryDark: '#B8872E',
          secondary: '#745F40',
          muted: '#948261',
          text: '#2C2C2C',
        },
      },
      borderRadius: {
        brand: '20px',
      },
      boxShadow: {
        soft: '0 20px 60px rgba(116, 95, 64, 0.10)',
      },
    },
  },
  plugins: [],
};

export default config;
