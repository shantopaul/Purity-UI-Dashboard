/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4FD1C5',
        primaryDark: '#38B2AC',
        dark: '#2D3748',
        navy: '#1A202C',
        muted: '#718096',
        lightText: '#A0AEC0',
        pageBg: '#F8F9FA',
        border: '#E2E8F0',
        success: '#48BB78',
        danger: '#E53E3E',
        warning: '#ECC94B',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        card: '20px',
        button: '12px',
        input: '12px',
      },
      boxShadow: {
        card: '0 7px 23px rgba(0, 0, 0, 0.05)',
        soft: '0 4px 12px rgba(0, 0, 0, 0.04)',
      },
    },
  },
  plugins: [],
}
