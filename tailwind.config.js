/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: "#0B0B0F",
          card: "#14141A",
          border: "rgba(139, 92, 246, 0.4)",
        },
        primary: {
          DEFAULT: "#8B5CF6",
          light: "#A78BFA",
          dark: "#6D28D9",
        },
        accent: {
          DEFAULT: "#6366F1",
          pink: "#EC4899",
        },
        text: {
          primary: "#F5F5F7",
          secondary: "#A1A1AA",
        },
      },
      fontFamily: {
        display: ["Sora", "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      keyframes: {
        fadeIn: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        slideIn: {
          from: { opacity: "0", transform: "translateX(-20px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(139, 92, 246, 0.4)" },
          "50%": { boxShadow: "0 0 40px rgba(139, 92, 246, 0.6)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.6s ease-out forwards",
        slideIn: "slideIn 0.6s ease-out forwards",
        float: "float 6s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
