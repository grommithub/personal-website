/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    screens: {
    
      'lg': '1024px',
      'uw': '2500px'
    },
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),require('daisyui'),
  ],
  daisyui: {
    themes: [
      "light",
      "dark",
      "forest",
    ],
  },
};