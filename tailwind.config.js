module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      dropShadow: {
        "3xl": "0 35px 35px rgba(0, 0, 0, 0.25)",
        "4xl": "-6px -6px 26px rgba(56,9,60,0.54)",
        purple: "-6px -6px 16px rgba(86,21,97,0.7)",
        "purple-accent": "0 10px 8px rgba(86,21,97,1)",
        candle: [
          "#FFF 0 -1px 4px",
          "#ff0 0 -2px 10px",
          "#ff8000 0 -10px 20px",
          "red 0 -18px 40px",
          "-6px -6px 26px rgba(56,9,60,0)",
        ],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
