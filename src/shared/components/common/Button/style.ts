import { styled } from 'styled-components';

export const Button = styled.button<{ type: string }>`
  cursor: pointer;
  border: none;
  outline: none;
  background: #e0e9ff;
  border-radius: 1rem;
  white-space: nowrap;

  padding: ${(props) => (props.type === 'back' ? '1.6rem' : '1.6rem 2rem')};

  font-weight: 700;
  font-size: 1.6rem;

  color: #648fff;
`;
