import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        surface: "var(--surface)",
        ink: "var(--ink)",
        muted: "var(--muted)",
        line: "var(--line)",
        accent: "var(--accent)",
        "ridge-near": "var(--ridge-near)",
        crimson: { DEFAULT: "#B90124", dark: "#8F011C" },
        gold: "#F0B323",
      },
      fontFamily: {
        display: ['"Young Serif"', "Georgia", "serif"],
        body: ["Figtree", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
