/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/flowbite/**/*.js",
    "./node_modules/tailwind-datepicker-react/dist/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ["Poppins", "sans"],
      },
    },
  },
  plugins: [require("flowbite/plugin"), require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
};
