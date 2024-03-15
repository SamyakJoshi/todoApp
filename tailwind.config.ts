import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{tsx,ts}",
  ],
  theme: {
    fontSize:{
      h1:[
        '5rem',{
          lineHeight:'5rem',
          fontWeight:'800',
        }
      ],
      h2:[
        '3rem',{
          lineHeight:'3.45rem',
          fontWeight:'800',
        }
      ],
      h3:[
        '2rem',{
          lineHeight:'2.3rem',
          fontWeight:'700',
        }
      ],
      h4:[
        '1.625rem',{
          lineHeight:'2.031rem',
          fontWeight:'700',
        }
      ],
      caption:[
        '1rem',{
          lineHeight:'2.031rem',
          fontWeight:'400',
        }
      ]
    },
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
