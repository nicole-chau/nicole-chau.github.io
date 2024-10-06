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
       },
    },
    fontFamily: {
      'sans': ['Open Sans', 'ui-sans-serif', 'system-ui'],
      'serif': ['Times New Roman', 'ui-serif', 'system-ui']
    },
    colors: {
      'gray': '#9D9B96',
      'navy': '#243671',
      'white-smoke': '#FFFDF9',
      'card-blue': '#E2E4F3',
      'card-pink': '#FFE6D9',
      'card-tan': '#FFF5E9',
      'periwinkle': '#A9ADDB',
      'maroon': '#895159',
      'salmon': '#DFAEA1',
      'transparent': 'transparent',
    },
  },
  plugins: [],
}
