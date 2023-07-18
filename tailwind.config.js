/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      width: {
        '600': '600px',
       }
    },
    fontFamily: {
      'sans': ['Open Sans', 'ui-sans-serif', 'system-ui'],
      'serif': ['Times New Roman', 'ui-serif', 'system-ui']
    },
    colors: {
      'white': '#FFFFFF',
      'black': '#000000',
      'powder-blue': '#A0C0D9',
      'dark-tan': '#E3D5CA',
      'slate-gray': '#6E86A1',
      'charcoal': '#465260',
      'gray': '#CCCCCC'
    },
    screens: {
      'sm': '426px',
      'md': '769px',
      'lg': '1025px',
      'tablet-sm': '656px'
    },
  },
  plugins: [],
}
