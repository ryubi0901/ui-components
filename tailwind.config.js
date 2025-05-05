module.exports = {
  content: ['./src/components/**/*.{js,ts,tsx}', './app/**/*.{js,ts,tsx}'],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.25rem',
        sm: '3rem',
        lg: '4rem',
        xl: '8.25rem',
        '2xl': '10.5rem',
      },
    },
    fontFamily: {
      sans: ['sans-serif'],
      self: ['serif'],
      english: ['sans-serif'],
    },
    fontSize: {
      xs: '.75rem',
      sm: '.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3.75rem',
    },
    letterSpacing: {
      xs: '-.1em',
      sm: '-0.5em',
      normal: '0',
      lg: '.05em',
      xl: '.1em',
      '2xl': '.15em',
      '3xl': '.2em',
    },
    extend: {},
  },
  plugins: [],
  corePlugins: {},
}
