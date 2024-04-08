import styled from 'styled-components';

export const Container = styled.div`
  display: inline-block;
  background: #ffffff;
  border-radius: 1rem;
  padding: 0.8rem 1.2rem;
`;

export const Box = styled.div`
  display: flex;
  gap: 0.8rem;
`;

export const Text = styled.div`
  font-weight: 400;
  font-size: 1.6rem;
  padding-top: 0.25rem;
  color: ${(props) => props.theme.colors.darknavy};
`;

export const ButtonWrapper = styled.button`
  cursor: pointer;
  border: none;
  background-color: white;
`;
