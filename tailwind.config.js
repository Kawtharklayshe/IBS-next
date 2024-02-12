/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: {
          DEFAULT: '12px',
          sm: '1rem',
          lg: '45px',
          xl: '1rem',
          '2xl': '1rem',
      },
  },
  },
  plugins: [],
};
