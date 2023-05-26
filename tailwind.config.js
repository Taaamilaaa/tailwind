/** @type {import('tailwindcss').Config} */

module.exports = {
  variants: {
    extend: {},
  },
  content: [
    "./src/pages/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/*/**.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      white: "white",
      "celtic-rush": "#2f4c5a",
      "granulated-sugar": "#fffcf2",
      "white-cliffs": "#e8e2c8",
      "earth-yellow": "#e0aa5c",
      "earth-yellow-darken": "#c98726",
      citronella: "#64b77b",
      "citronella-darken": "#418d56",
      mercury: "#ebebeb",
      "gibraltar-sea": "#173753",
      "black-stalion": "#0a181f",
      "explosive-grey": "#c4c4c4",
      "ultimate-grey": "#a9a9a9",
      "petrol-slumber": "#223640",
      "white-smoke": "#f5f5f5",
      "bucatini-noodle": "#fdf5d8",
      jupiter: "#e2e2e2",
      "aswad-black": "#17181c",
      "honest-blue": "#5a869c",
      "maastrich-blue": "#021c3c",
      "orange-yellow": "#fcb912",
      "bright-grey": "#ecedf1",
      "cosmic-latte": "#fff8e8",
      "effervescent-blue": "#042b59",
      "deep-sky-blue": "#0d6efd",
      "black-lacquer": "#3e3e3e",
      "cerebral-grey":"#cccccc",
      "baby-talk-grey": "#bababa",
      "black-out": "#222222",
      "super-silver": "#eeeeee",
      "christmas-silver": "#e2e0e0",
      "million-grey": "#999999",
      "island-green": "#2ca85f",
      "squant": "#666666"
     
    },
    container: {},
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
        "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },     

    },
  },
  plugins: [
    require('tailwind-clip-path'),
  ],
};
