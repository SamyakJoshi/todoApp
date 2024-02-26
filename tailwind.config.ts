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
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        typography: 'var(--color-typography)',
        button:'var(--color-buttons)',
        hoverButton:'var(--color-hoverButton)',
      },
      backgroundColor: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
      },
      backgroundImage: {
        gradientBackground: 'var(--color-gradient-background)',

      },
      borderColor: {
        border: 'var(--color-border)',
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
