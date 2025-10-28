import type { Config } from "tailwindcss";
import animatePlugin from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: [
    "./client/index.html",
    "./client/src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    "producto-card",
    "btn-whatsapp",
    "btn-comprar",
    "categoria-btn",
    "testimonio-card",
    "fade-in-scroll",
    "visible",
    "float-animation",
    "float-animation-slow",
    "hero-title",
    "hero-subtitle",
    "hero-cta",
  ],
  theme: {
    extend: {
      animation: {
        'gentleFloat': 'gentleFloat 3s ease-in-out infinite',
        'gentleFloatSlow': 'gentleFloatSlow 8s ease-in-out infinite',
        'fadeInUp': 'fadeInUp 0.8s cubic-bezier(0.16,1,0.3,1) forwards',
        'fadeInUpDelayed': 'fadeInUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.2s backwards',
        'fadeInUpDelayedMore': 'fadeInUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.4s backwards',
        'gentleHeartbeat': 'gentleHeartbeat 1.5s ease-in-out infinite',
      },
      keyframes: {
        gentleFloat: {
          '0%,100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-8px) rotate(5deg)' }
        },
        gentleFloatSlow: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' }
        },
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' }
        },
        gentleHeartbeat: {
          '0%,100%': { transform: 'scale(1.05)' },
          '50%': { transform: 'scale(1.08)' }
        },
      }
    }
  },
  plugins: [animatePlugin],
} satisfies Config;
