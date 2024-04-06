import styled from 'styled-components';

interface InputStyleProps {
  $width: number;
}

export const HiddenLabel = styled.label`
  position: absolute;
  white-space: nowrap;
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
  border: 0;
  padding: 0;
  clip: rect(0, 0, 0, 0);
  clip-path: inset(50%);
`;

export const Input = styled.input<InputStyleProps>`
  width: ${({ $width }) => `${$width}px`};
  height: 5.2rem;
  font-size: 1.6rem;
  border-radius: 1rem;
  background: #fff;
  border: none;
  outline: none;
  padding: 1.6rem 2rem;
  margin: 1.6rem 1.6rem 0 0;

  &::placeholder {
    color: #d6d8e5;
  }
`;
