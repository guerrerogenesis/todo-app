/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    "./src/**/*.{html,js}",
    "./src/*.{html,js}"
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1023px',
      xl: '1440px',
    },
    colors: {
      'ultramarine': '#10143B',
      'black': '#000000',
      'white': '#FFFFFF',
      'coral': '#E86A5B',
      'purple': '#3a099d',
      'rat': '#965299',
      'dark-primary': '#0E0E0E',
      'dark-secondary': '#232323',
      'dark-tertiary' : '#0B0B0B',
      'graylight' : '#9b8b8b',
      'greenish': '#72af3c',
      'redish': '#cb4e3d',
      'transparent': 'transparent',
      'turquoise': '#76e7cd',
      'space-cadet': '#171738',
      'rose-bonbon': '#ec4498',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      quicksand: ['Quicksand', 'serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        'center-sm': '0 0 10px 0 rgba(0, 0, 0, 0.1)',
        'center-md': '0 0 25px 0 rgba(0, 0, 0, 0.1)',
        'center-lg': '0 0 30px 0 rgba(0, 0, 0, 0.1)',
      },
    }
  },
  plugins: [],
}
