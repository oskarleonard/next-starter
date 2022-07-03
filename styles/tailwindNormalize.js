const em = (px) => `${px / 16}em`;
const px = (num) => `${num}px`;

const rem = (px) => `${px / 16}rem`;

const getSpacings = () => {
  let spacings = {
    inherit: 'inherit',
    [1]: px(1),
    [360]: px(360),
    [440]: px(440),
    [586]: px(586),
    [592]: px(592),
  };
  for (let i = 0; i < 180; i++) {
    if (i % 2 === 0) {
      spacings[i] = px(i);
    }
  }

  return spacings;
};

const getFontSizes = () => {
  let fontSizes = {};
  for (let i = 0; i < 120; i++) {
    if (i % 2 === 0) {
      fontSizes[i] = rem(i);
    }
  }
  return fontSizes;
};

const BORDER_RADIUS = {
  8: rem(8),
};

// Names take from https://chir.ag/projects/name-that-color/#424B5A
const COLORS = {
  transparent: '#FFFFFF00',
  white: '#ffffff',
  black: '#1a1a1a',
  jewel: '#12652d',
  blue: '#2f5eff',
  mercury: '#e6e6e6',
  concrete: '#f2f2f2',
  scorpion: '#595959',
  abbey: 'rgba(255, 255, 255, 0.8)',
  jungleMist: '#c2d1d9',
  riverBed: '#424b5a',
  athensGray: '#f2f5f7',
  heavyMetal: '#26382c',
};

/*$mobile-large: 321px;
$mobile-landscape: 576px;
$tablet: 768px;
$desktop: 992px;
$widescreen: 1440px;*/

const SCREENS = {
  xs: '321px',
  sm: '576px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
};

module.exports = { getSpacings, COLORS, SCREENS, getFontSizes, BORDER_RADIUS };
