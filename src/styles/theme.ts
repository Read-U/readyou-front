import { DefaultTheme } from 'styled-components';

const colors = {
  lightblue: '#E0E9FF',
  blue: '#648FFF',
  lightpink: '#FFEFEF',
  pink: '#FF7777',
  lightgray: '#F8F8FC',
  gray: '#D6D8E5',
  darkgray: '#C4C6D8',
  lightnavy: '#4D506C',
  navy: '#303351',
  darknavy: '#1D2140',
  white: '#FFFFFF',
};

export type ColorTypes = typeof colors;

export const theme: DefaultTheme = {
  colors,
};

// 사용법
// color: ${ (props) => props.theme.colors.lightblue };
