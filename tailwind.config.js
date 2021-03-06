module.exports = {
  purge: {
    enabled: true,
    content: ['./**/*.html', './**/*.shtml'],
  },
  // purge : ['./src/**/*.html', './src/**/*.shtml'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      colors: {
        primary: {
          light: '#A40093',
          DEFAULT: '#7E0072',
          dark: '#5E0254',
        }
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      textColor: ['active'],
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
