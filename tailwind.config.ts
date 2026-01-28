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
        primary: '#1B365D',
        accent: '#FF6B35',
        surface: '#F8F9FA',
        'text-main': '#2C3E50',
        'text-muted': '#6C757D',
      },
      fontFamily: {
        display: ['var(--font-bebas)', 'sans-serif'],
        body: ['var(--font-work-sans)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
