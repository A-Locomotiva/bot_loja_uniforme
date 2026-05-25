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
        brand: {
          red:      '#EA1B22',
          'red-dark': '#c4151c',
          orange:   '#ef8226',
          dark:     '#231E1E',
          light:    '#F5F5F5',
          white:    '#FFFFFF',
          wa:       '#25D366',
          'wa-btn': '#4EC95A',
        },
      },
      fontFamily: {
        display: ['var(--font-bebas)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
