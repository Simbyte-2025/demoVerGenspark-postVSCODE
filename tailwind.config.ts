import type { Config } from "tailwindcss";

export default {
  content: [
    "./client/index.html",
    "./client/src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'producto-card',
    'btn-whatsapp',
    'btn-comprar',
    'categoria-btn',
    'testimonio-card',
    'fade-in-scroll',
    'visible',
    'float-animation',
    'float-animation-slow',
    'hero-title',
    'hero-subtitle',
    'hero-cta',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;
