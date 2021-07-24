module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx,mdx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    //Some of these colors probably won't be used - I'm just putting them here to save
    //Tailwind should purge the unused ones anyway... i think...
    gradientColorStops: theme => ({
      ...theme('colors'),
      'darkGray': '#353535',
      'turquoise': '#34D399',
      'white': '#FFFFFF',
      'lightGray': '#D9D9D9',
      'navy': '#284B63',
      'darkNavy': '#1F2041'
    }),
    extend: {
      colors: {
        'darkGray': '#353535',
        'turquoise': '#34D399',
        'white': '#FFFFFF',
        'lightGray': '#D9D9D9',
        'navy': '#284B63',
        'darkNavy': '#1F2041'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
