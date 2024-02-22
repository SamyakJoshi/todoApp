import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{tsx,ts}",
  ],
  theme: {
    extend: {
      color: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        button:"var(--color-buttons)",
      },
      backgroundColor: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        button:"var(--color-buttons)",
        buttonHover:"var(--color-buttonHover)"
      },
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
  },
  plugins: [
    
  ],
};
export default config;
