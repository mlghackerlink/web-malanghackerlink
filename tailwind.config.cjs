/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["JetBrains Mono", "monospace"],
      },
      fontSize: {
        ascii: [
          "10px",
          {
            lineHeight: "1",
          },
        ],
        "sub-ascii": [
          "9px",
          {
            lineHeight: "1",
          },
        ],
        "ascii-mobile": [
          "8px",
          {
            lineHeight: "1",
          },
        ],
        "sub-ascii-mobile": [
          "7px",
          {
            lineHeight: "1",
          },
        ],
      },
    },
  },
  plugins: [],
};
