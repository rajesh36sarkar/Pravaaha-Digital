import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#748DA6',
        secondary: '#9CB4CC',
        soft: '#D3CEDF',
        accent: '#F2D7D9',

        background: '#FAFAFC',
        foreground: '#1F2937',
        muted: '#6B7280',
        border: '#E5E7EB',
      },

      fontFamily: {
        sans: ['var(--font-inter)'],
      },

      borderRadius: {
        xl: '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },

      boxShadow: {
        soft: '0 10px 30px rgba(0,0,0,0.06)',
        glow: '0 0 30px rgba(116, 141, 166, 0.2)',
      },

      backgroundImage: {
        hero:
          'radial-gradient(circle at top left, rgba(156,180,204,0.25), transparent 40%), radial-gradient(circle at bottom right, rgba(242,215,217,0.3), transparent 40%)',
      },

      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}

export default config