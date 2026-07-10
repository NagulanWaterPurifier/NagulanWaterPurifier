/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./data/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // FRD section 7: Primary Blue, Secondary Sky Blue, Accent Green,
        // Text Dark Gray, Background White.
        brand: {
          blue: "#0B5FFF",
          "blue-dark": "#0A47C2",
          sky: "#38BDF8",
          "sky-light": "#E6F6FE",
          green: "#16A34A",
          "green-dark": "#128A3E",
          gray: "#334155",
          "gray-light": "#64748B",
        },
      },
      fontFamily: {
        heading: ["var(--font-poppins)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      borderRadius: {
        card: "1.25rem",
      },
      boxShadow: {
        card: "0 10px 30px -12px rgba(11, 95, 255, 0.18)",
      },
    },
  },
  plugins: [],
};
