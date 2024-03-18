/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', 'node_modules/flowbite-react/lib/esm/**/*.js'],
  theme: {
    extend: { backgroundImage: {
      'hero-pattern': "url('/src/assets/istockphoto-1566653954-170667a.webp')",
      'footer-texture': "url('/img/footer-texture.png')",},
  },
  plugins: [require('daisyui')],
}
};
