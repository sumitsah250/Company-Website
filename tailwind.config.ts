import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F4EFE6",
        surface: {
          DEFAULT: "#F7F3EB",
          elevated: "#FFFDF8",
          highlight: "#FBF8F1",
        },
        foreground: "#211F1B",
        muted: "#6F685F",
        subtle: "#938A7F",
        border: {
          DEFAULT: "#D8CEC0",
          hover: "#C8BAA9",
        },
        primary: {
          DEFAULT: "#181612",
          light: "#2A2721",
          dark: "#0F0E0D",
          glow: "rgba(24, 22, 18, 0.08)",
        },
        secondary: {
          DEFAULT: "#6F685F",
          light: "#211F1B",
          dark: "#6F685F",
          glow: "rgba(111, 104, 95, 0.08)",
        },
        accent: {
          rose: "#181612",
          amber: "#6F685F",
          emerald: "#C8BAA9",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "slide-up": "slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "slide-down": "slideDown 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "scale-in": "scaleIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "float": "float 6s ease-in-out infinite",
        "pulse-glow": "pulseGlow 4s ease-in-out infinite",
        "shimmer": "shimmer 2s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideDown: {
          "0%": { opacity: "0", transform: "translateY(-20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
