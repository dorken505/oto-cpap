import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './containers/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-linear': 'linear-gradient(180deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0))',
      },
      gridTemplateColumns: {
        'container': '1fr minmax(1440px, 94%) 1fr',
      },
      gridTemplateRows: {
        'container': '80px auto 100px',
      }
    },
  },
  plugins: [],
}
export default config
