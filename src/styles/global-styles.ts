import { createGlobalStyle, css } from 'styled-components';
import reset from 'styled-reset';

const customReset = css`
  ${reset}
  html {
    font-size: 62.5%;
    font-family: 'Pretendard';
  }
`;

export const GlobalStyle = createGlobalStyle`
  ${customReset}
`;
