import { styled } from 'styled-components';

export const Inner = styled.div`
  position: relative;
  width: 100%;
  height: 93.2rem;

  background: #ffffff;
  border-radius: 1rem;
  padding: 2rem;
`;

export const ItemContainer = styled.div`
  height: 83rem;
  margin: 2rem 0;
  padding: 0 2rem 1.6rem 0;

  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 1.3rem;
  }

  &::-webkit-scrollbar-thumb {
    background: white;
    background-clip: padding-box;
    border: 0.5rem solid transparent;
    border-radius: 10rem;
  }

  &::-webkit-scrollbar-track {
    border-radius: 10rem;
    background: ${(props) => props.theme.colors.gray};
  }
`;
