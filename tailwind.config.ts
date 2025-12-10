import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',  // ← Mudei aqui
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
export default config