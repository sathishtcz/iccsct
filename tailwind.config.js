export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx,html}',
    './node_modules/preline/dist/*.js', // For Preline's JavaScript components
  ],
  plugins: [require('@tailwindcss/forms')],
};