import { defineConfig } from "tailwindcss";

/** @type {import('tailwindcss').Config} */
export default defineConfig({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        friendly: {
          blue: "#AEDFF7", // Biru Muda
          green: "#B8E4C9", // Hijau Muda
          yellow: "#FFF9B1", // Kuning Lemon
          orange: "#FFD6A5", // Oranye Muda
          purple: "#D6C7F7", // Ungu Lembut
          gray: "#F2F2F2", // Abu-abu Muda
        },
      },
    },
  },
  plugins: [],
});
