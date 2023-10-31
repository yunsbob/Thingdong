import { DefaultTheme } from 'styled-components';

const color = {
  // text color
  black1: '#303030',
  grey1: '#838383',
  grey2: '#AEAEAE',
  grey3: '#CDCDCD',
  grey4: '#E8E8E8',
  grey5: '#F5F5F5',
  white: '#FFFFFF',
  white2: '#FFFFFF50',

  // main color
  blue: '#5C76FF',
  blue2: '#A6D3FB',
  blue3: '#A9CEFA',
  coolGrey: '#EDF0F6',
  lightYellow: '#FFE87F',
  salmon: '#F69D91',
  danger: '#FA6B3C',
} as const;

const fontSize = {
  heading1: '46px',
  heading2: '36px',
  subtitle1: '36px',
  subtitle2: '24px',
  body1: '20px',
  body2: '18px ',
  body3: '16px',
  body4: '14px',
  small1: '12px',
  small2: '10px',
} as const;

const shadow = {
  shadow: '0px 10px 25px rgba(190, 190, 190, 0.35)',
  shadowBtn: '1px 1px 10px rgba(0, 0, 0, 0.10)',
  shadowWhite: '0px 0px 10px #FFF',
} as const;

const theme = {
  color,
  fontSize,
  shadow,
};

export type ThemeType = typeof theme;

export default theme;
