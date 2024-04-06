import { styled } from 'styled-components';

export const Box = styled.div`
  width: 93rem;
  height: 97.2rem;

  background: #f8f8fc;
  border-radius: 1rem;
  margin: 2rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Inner = styled.div`
  position: relative;
  width: 89rem;
  height: 93.2rem;

  background: #ffffff;
  border-radius: 1rem;
  padding: 2rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ItemContainer = styled.div`
  height: 100%;
  margin: 2rem 0;

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
