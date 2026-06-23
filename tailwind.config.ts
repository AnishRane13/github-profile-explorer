import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gh: {
          bg: "var(--gh-bg)",
          "bg-secondary": "var(--gh-bg-secondary)",
          "bg-tertiary": "var(--gh-bg-tertiary)",
          border: "var(--gh-border)",
          text: "var(--gh-text)",
          muted: "var(--gh-muted)",
          link: "var(--gh-link)",
          "link-hover": "var(--gh-link-hover)",
        },
      },
    },
  },
  plugins: [],
};
export default config;
