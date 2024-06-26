import { styled } from 'styled-components';

export const Inner = styled.div`
  width: 100%;
  background: #ffffff;
  border-radius: 1rem;
  padding: 2rem 0 0 2rem;
`;

export const Header = styled.div<{ isMobile?: boolean }>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding-right: 3.2rem;

  position: relative;
  z-index: 999;
`;

export const ToastMessage = styled.div<{ isVisible: boolean }>`
  background: ${(props) => props.theme.colors.lightnavy};
  padding: 1rem 0;
  width: 100%;
  border-radius: 1rem;
  color: ${(props) => props.theme.colors.lightgray};
  font-weight: 700;
  font-size: 1.4rem;
  line-height: 1.9rem;
  text-align: center;
  transition: opacity 3s ease-in-out;
  opacity: ${(props) => (props.isVisible ? 1 : 0)};

  @media (max-width: 768px) {
    position: absolute;
    top: 112%;
    left: 48%;
    transform: translate(-50%, -50%);
    padding: 0.4rem;
    z-index: 999;
  }
`;

// export const CompleteHover = styled.div`
//   position: absolute;
//   pointer-events: none;
//   top: -3rem;
//   left: 50%;
//   transform: translate(-50%, 0);
//   width: max-content;
//   border-radius: 1rem;
//   font-weight: 600;
//   font-size: 1.2rem;
//   background-color: ${(props) => props.theme.colors.gray};
//   opacity: 0.7;
//   color: ${(props) => props.theme.colors.pink};
//   padding: 1.5rem;
//   z-index: 50;
// `;

export const ItemListContainer = styled.div`
  height: calc(100vh - 22rem);
  width: calc(100% - 2rem);
  margin-top: 1.6rem;
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
