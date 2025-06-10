import fluid, { extract, screens, fontSize } from 'fluid-tailwind'

export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './*.html'
  ],
  theme: {
    extend: {
      fontFamily: { sans: ['Geist','sans-serif'] },
      screens,
      fontSize
    }
  },
  plugins: [ fluid() ],
  extract
}