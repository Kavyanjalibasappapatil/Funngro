/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0A0F14',
        'bg-card': '#0F1620',
        'bg-elevated': '#141E2A',
        green: {
          primary: '#55FF73',
          secondary: '#2FD95C',
          dim: '#1A3D25',
          glow: 'rgba(85,255,115,0.15)',
        },
        surface: {
          1: '#111820',
          2: '#161F2C',
          3: '#1C2636',
        },
      },
      fontFamily: {
        serif: ['Georgia', 'Times New Roman', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'counter': 'counter 2s ease-out forwards',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(85,255,115,0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(85,255,115,0.6), 0 0 80px rgba(85,255,115,0.2)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
