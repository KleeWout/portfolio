import { heroui } from '@heroui/react'

const config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-aeonik-sans)', 'ui-sans-serif', 'system-ui'],
        serif: ['var(--font-sofiaPro-sans)', 'ui-serif', 'Georgia'],
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        secondary: 'var(--border-color)',
        tertiary: 'var(--tertiary)',
      },
    },
  },
  plugins: [heroui()],
}
export default config
