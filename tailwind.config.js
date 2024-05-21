// tailwind.config.js

module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '2rem',
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1140px', // 1200px olarak ayarlandı
        },
      },
    },
  },
  plugins: [],
};
