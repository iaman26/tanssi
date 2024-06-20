/** @type {import('tailwindcss').Config} */
import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './node_modules/flowbite/**/*.js',
  ],
  theme: {
    screens: {
      xs: '480px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px',
      '3xl': '1520px',
    },
    extend: {
      fontFamily: {
        Fractul: ['Fractul'],
      },
      borderColor: {
        border: 'rgba(49, 61, 77, 0.6)'
      }
    },
  },
  plugins: [
    require('flowbite/plugin')({
      charts: true,
    }),
  ],
}