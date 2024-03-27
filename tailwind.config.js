/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', 'node_modules/flowbite-react/lib/esm/**/*.js'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/src/assets/istockphoto-1566653954-170667a.webp')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
    },
    plugins: [require('daisyui')],
    screens: {
      sm: '460px',
      // => @media (min-width: 640px) { ... }

      md: '754px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
  },
};
