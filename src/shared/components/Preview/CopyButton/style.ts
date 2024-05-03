import styled from 'styled-components';

export const DisabledCopyButton = styled.button<{ type: string }>`
  cursor: pointer;
  border: none;
  outline: none;
  background: ${(props) => props.theme.colors.lightblue};
  border-radius: 1rem;
  white-space: nowrap;

  padding: 1.6rem 2rem;

  font-weight: 700;
  font-size: 1.6rem;

  color: ${(props) => props.theme.colors.blue};
`;
