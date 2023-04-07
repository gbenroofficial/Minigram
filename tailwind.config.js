/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      flexShrink: {
        2: "2",
      },
    },
  },
  plugins: [
    require("tailwind-scroll-behavior")(),
    require("tailwind-scrollbar-hide"),
  ],
};
