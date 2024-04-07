import styled from 'styled-components';

export const CopyButton = styled.div`
  position: relative;
  left: 0;
  width: 9.9rem;
  height: 5.2rem;
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.9rem;
  cursor: pointer;
  color: ${(props) => props.theme.colors.lightblue};
  background: ${(props) => props.theme.colors.blue};
  &:hover {
    color: ${(props) => props.theme.colors.blue};
    background: ${(props) => props.theme.colors.lightblue};
  }
`;
