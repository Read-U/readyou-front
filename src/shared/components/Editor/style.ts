import { styled } from 'styled-components';

export const Inner = styled.div`
  width: 100%;
  background: #ffffff;
  border-radius: 1rem;
  padding: 2rem 0 0 2rem;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.6rem;
`;

export const ToastMessage = styled.div<{ isVisible: boolean }>`
  white-space: nowrap;
  background: ${(props) => props.theme.colors.lightnavy};
  padding: 1.6rem 0;
  width: 100%;
  border-radius: 1rem;
  color: ${(props) => props.theme.colors.lightgray};
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 1.9rem;
  text-align: center;
  margin-right: 2rem;
  transition: opacity 3s ease-in-out;
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
`;

export const ItemListContainer = styled.div`
  height: calc(100vh - 22rem);
  margin-top: 2rem;
  overflow-y: auto;
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

export const ItemContainer = styled.div`
  margin: 2rem 0;
  padding: 0 1.2rem 1.6rem 0;

  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  width: calc(100% - 2rem);
  margin: 1rem;
`;
