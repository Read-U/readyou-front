import { styled } from 'styled-components';

export const Inner = styled.div`
  width: 100%;
  background: #ffffff;
  border-radius: 1rem;
  padding: 2rem 0 0 2rem;
`;

export const TextContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  width: calc(100% - 2rem);
  height: calc(100vh - 23rem);
  overflow: auto;
`;

export const TextArea = styled.textarea`
  margin: 2rem 0;
  padding: 0 0 1.6rem 0;
  resize: none;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
  border: solid 1px ${(props) => props.theme.colors.gray};
  &:focus {
    outline: 0;
  }
  
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
