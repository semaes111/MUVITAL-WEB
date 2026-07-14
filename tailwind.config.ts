import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        grafito: {
          DEFAULT: "#214C53",
          800: "#183A40",
          700: "#2E6A73",
        },
        mineral: {
          DEFAULT: "#D9D4C8",
          dark: "#C9C3B4",
        },
        vital: {
          DEFAULT: "#2E888D",
          dark: "#236A6F",
        },
        petroleo: {
          DEFAULT: "#214C53",
          dark: "#183A40",
          claro: "#2E888D",
          suave: "#ABD2CF",
        },
        metal: {
          DEFAULT: "#C3A43C",
        },
        clinico: {
          DEFAULT: "#ABD2CF",
          dark: "#6DAFAA",
        },
        niebla: {
          DEFAULT: "#9EA9B0",
        },
        energia: {
          DEFAULT: "#E87722",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        display: ["Playfair Display Variable", "Playfair Display", "serif"],
        general: ["JUST Sans", "Source Sans 3 Variable", "Source Sans 3", "sans-serif"],
        body: ["Source Sans 3 Variable", "Source Sans 3", "sans-serif"],
        mono: ["Source Sans 3 Variable", "Source Sans 3", "sans-serif"],
      },
      maxWidth: {
        contenido: "1280px",
      },
      transitionTimingFunction: {
        muv: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      borderRadius: {
        xl: "calc(var(--radius) + 4px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xs: "calc(var(--radius) - 6px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        scanline: {
          "0%": { top: "-10%" },
          "100%": { top: "110%" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        scanline: "scanline 1.8s ease-in-out forwards",
      },
    },
  },
  plugins: [animate],
} satisfies Config;
