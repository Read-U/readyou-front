import { createGlobalStyle, css } from 'styled-components';
import reset from 'styled-reset';

const customReset = css`
  ${reset}
  html {
    font-size: 62.5%;
  }
`;

export const GlobalStyle = createGlobalStyle`
  font-family: "Pretendard";
  ${customReset}
`;
