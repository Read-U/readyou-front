import styled from 'styled-components';

interface ButtonStyleProps {
  $width: number;
  $bgColor: string;
  $color: string;
}

export const Button = styled.button<ButtonStyleProps>`
  width: ${({ $width }) => `${$width}px`};
  height: 5.2rem;
  border-radius: 1rem;
  padding: 1.6rem;
  border: none;
  outline: none;
  font-weight: 700;
  color: ${(props) => props.theme.colors[props.$color]};
  text-align: center;
  background-color: ${(props) => props.theme.colors[props.$bgColor]};
`;
