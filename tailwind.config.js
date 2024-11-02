/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {

      colors: {
        customBrown: '#3F2F2A',
      },

    },
  },
  plugins: [
    require('flowbite/plugin')

  ],
};
