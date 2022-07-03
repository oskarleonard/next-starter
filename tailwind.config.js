const {
  getSpacings,
  getFontSizes,
  COLORS,
  SCREENS,
  BORDER_RADIUS,
} = require('./styles/tailwindNormalize');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  corePlugins: {
    preflight: false,
  },
  theme: {
    boxShadow: {
      md: '0 2px 16px 0 rgba(0, 0, 0, 0.16)',
    },
    spacing: getSpacings(),
    fontSize: getFontSizes(),
    screens: SCREENS,
    borderRadius: BORDER_RADIUS,
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '8px',
        lg: '16px',
      },
      screens: {
        sm: '100%',
        md: '100%',
        lg: '1248px',
        xl: '1248px',
      },
    },
    colors: COLORS,
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.hCenterAbsolute': {
          position: 'absolute',
          transform: 'translate(-50%, -50%)',
          left: '50%',
          right: '50%',
        },
        '.imgOptimizeContrast': {
          ['image-rendering']: '-webkit-optimize-contrast',
        },
        '.ellipsifyTwoLines': {
          overflow: 'hidden',
          'text-overflow': 'ellipsis',
          display: '-webkit-box',
          '-webkit-line-clamp': '2',
          'line-clamp': '2',
          '-webkit-box-orient': 'vertical',
        },
      });
    },
  ],
};
