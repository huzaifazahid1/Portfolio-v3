/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#df9306",
          light: "#f8b74c",
          dark: "#aa7005",
        },
        background: "#0f0f0f",
        foreground: "#f5f5f5",
        secondary: "#232323",
        accent: "#2a2a2a",
      },
      fontFamily: {
        poppins: ["var(--font-poppins)"],
        montserrat: ["var(--font-montserrat)"],
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(31, 38, 135, 0.15)",
      },
      backdropBlur: {
        glass: "10px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        glass:
          "linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.01))",
      },
    },
  },
  plugins: [],
};
