/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        desktop: "1200px",
        tablet: "1135px",
        ipod: "980px",
        mobile: "768px",
        small: "540px",
      },
      spacing: {
        px: "1px",
        "2px": "2px",
        "4px": "4px",
        "8px": "8px",
        "16px": "16px",
        "20px": "20px",
        "32px": "32px",
      },
    },
  },
  plugins: [],
};
