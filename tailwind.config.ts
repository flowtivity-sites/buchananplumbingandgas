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
        primary: '#1e3a5f',
        accent: '#ff6b35',
        surface: '#f8f9fa',
        'text-main': '#2c3e50',
        'text-muted': '#6c757d',
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
