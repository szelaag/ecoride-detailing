import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        eco: { green: "#1db954", dark: "#0c1a12", light: "#e8f5ec" }
      },
      borderRadius: { '2xl': '1.25rem' }
    },
  },
  plugins: [],
};
export default config;
