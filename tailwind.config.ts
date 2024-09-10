import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary : "#2B2B2B",
        secondary : "#4B4B4B",
        pureWhite : "#FFFFFF",
        white : "#E1E1E1",
        grey : "#8C8C8C",
      },
    },
  },
  plugins: [],
};
export default config;
