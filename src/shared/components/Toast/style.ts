import styled, { css, keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

export const Container = styled.div<{
  status: 'info' | 'error';
  message: string;
}>`
  width: 24.8rem;
  height: 6rem;
  border-radius: 1rem;
  background-color: ${({ status, theme }) =>
    status === 'info' ? 'rgba(29, 33, 64, 0.6)' : theme.colors.pink};
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  transform: translate(-50%, -50%);
  bottom: 0;
  left: 50%;
  z-index: 100;
  visibility: ${({ message }) => (message ? 'visible' : 'hidden')};
  animation: ${({ message }) =>
    message
      ? css`
          ${fadeIn} 0.5s, ${fadeOut} 0.5s 2.5s
        `
      : ''};
`;

export const Span = styled.span`
  color: white;
  font-size: 1.6rem;
  font-weight: 700;
`;
