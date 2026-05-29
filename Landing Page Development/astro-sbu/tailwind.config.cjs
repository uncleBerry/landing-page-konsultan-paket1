/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50:  '#eef3fb',
          100: '#d5e1f5',
          200: '#adc3eb',
          300: '#7a9ede',
          400: '#4a79cf',
          500: '#2a5bbf',
          600: '#1e4aab',
          700: '#153a8e',
          800: '#0f2d6f',
          900: '#0d2b55',
          950: '#071e3d',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
      },
      aspectRatio: {
        '9/16': '9 / 16',
      },
      animation: {
        'pulse-cta': 'pulse-cta 2s ease-in-out infinite',
        'ping-slow': 'ping 2.5s cubic-bezier(0, 0, 0.2, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
      },
      keyframes: {
        'pulse-cta': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(249,115,22,0.5)' },
          '50%':       { boxShadow: '0 0 0 14px rgba(249,115,22,0)' },
        },
      },
    },
  },
  plugins: [],
};
