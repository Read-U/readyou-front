import { styled } from 'styled-components';

export const Inner = styled.div`
  width: 100%;
  background: #ffffff;
  border-radius: 1rem;
  padding: 2rem 0 0 2rem;
`;

export const ItemListContainer = styled.div`
  height: calc(100vh - 15.4rem);
  margin-top: 2rem;
  overflow-y: auto;
`;

export const ItemContainer = styled.div`
  margin: 2rem 0;
  padding: 0 1.2rem 1.6rem 0;

  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  width: calc(100% - 2rem);
  height: calc(100vh - 20rem);
  margin: 1rem;

  overflow: auto;

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
