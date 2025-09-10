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
      'sans': ['greycliff-cf', 'ui-sans-serif', 'system-ui'],
      'serif': ['Times New Roman', 'ui-serif', 'system-ui']
    },
    colors: {
      'navy': '#283654',
      'white-smoke': '#FDFDFD',

      'gray': '#AAAAAA',

      'card-blue': '#DCE7F0',
      'card-pink': '#ECE1E2',
      'card-tan': '#F6F0EC',

      'maroon': '#6E4047',
      'salmon': '#A3666F', 
      'transparent': 'transparent',
    },
  },
  plugins: [],
}
