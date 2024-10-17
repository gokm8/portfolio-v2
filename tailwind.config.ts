import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
        poppins: ['var(--font-poppins)'],
        anonymousPro: ['var(--font-anonymousPro)']
      }
    }
  },
  plugins: [
    require('tailwindcss-animate'),
    require('tailwindcss-animate'),
    require('@tailwindcss/typography')
  ]
}
export default config
