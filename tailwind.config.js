module.exports = {
  mode: "jit",
  // These paths are just examples, customize them to match your project structure
  content: [
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        amazon_blue: {
          light: "#232F3E",
          DEFAULT: "#131921",
        },
      },
    },
  },
  variant: {
    extend: {},
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
