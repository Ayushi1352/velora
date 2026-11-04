import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    // Listed in full (not in extend) so xs sorts before sm in the generated CSS.
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      borderColor: {
        DEFAULT: "currentColor",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        accent: ["var(--font-accent)"],
        heading: ["var(--font-heading)"],
        body: ["var(--font-body)"],
        ui: ["var(--font-ui)"],
        label: ["var(--font-label)"],
        signature: ["var(--font-signature)"],
      },
      transitionDuration: {
        350: "350ms",
        400: "400ms",
      },
      transitionTimingFunction: {
        out: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
