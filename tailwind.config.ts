import type {Config} from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#D4AF37',
          50: '#FFF9E6',
          100: '#F9E8A8',
          600: '#B78F17',
          900: '#5B4106'
        },
        neutral: {
          950: '#1A1A1A'
        },
        olive: '#6F7D45',
        clay: '#B86B4B',
        cream: '#F8F4EC'
      },
      boxShadow: {
        glow: '0 24px 80px rgba(212, 175, 55, 0.24)'
      }
    }
  },
  plugins: []
};

export default config;
