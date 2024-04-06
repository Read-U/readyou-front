import { styled } from 'styled-components';

export const Box = styled.div`
  width: 930px;
  height: 972px;
  left: 20px;
  top: 88px;

  background: #f8f8fc;
  border-radius: 10px;
  margin: 2rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Inner = styled.div`
  position: relative;
  width: 890px;
  height: 932px;

  background: #ffffff;
  border-radius: 10px;
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
