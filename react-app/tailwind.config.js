/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#0a0a0a',
        surface: '#111111',
        card: '#141414',
        'card-hover': '#1c1c1c',
        border: '#222222',
        'border-medium': '#333333',
        foreground: '#f5f5f5',
        'muted-foreground': '#a3a3a3',
        'subtle-foreground': '#666666',
        accent: {
          DEFAULT: '#ff3b30',
          hover: '#ff5247',
          gold: '#f59e0b',
        }
      },
      fontFamily: {
        display: ['Anton', 'sans-serif'],
        condensed: ['Bebas Neue', 'sans-serif'],
        sans: ['Manrope', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'glow-red': '0 0 45px rgba(255, 59, 48, 0.22)',
      }
    },
  },
  plugins: [],
}
