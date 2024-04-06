import { styled } from 'styled-components';

export const Button = styled.button<{ type: string }>`
  cursor: pointer;
  border: none;
  outline: none;
  background: ${(props) =>
    props.type === 'back'
      ? props.theme.colors.blue
      : props.theme.colors.lightblue};
  border-radius: 1rem;
  white-space: nowrap;

  padding: ${(props) => (props.type === 'back' ? '1.6rem' : '1.6rem 2rem')};

  font-weight: 700;
  font-size: 1.6rem;

  color: ${(props) =>
    props.type === 'back'
      ? props.theme.colors.lightgray
      : props.theme.colors.blue};
`;
