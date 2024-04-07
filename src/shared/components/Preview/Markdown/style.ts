import { styled } from 'styled-components';

export const PreviewContainer = styled.div<{ $lightMode: boolean }>`
  position: relative;
  height: 82rem;
  width: 87rem;
  margin: 1rem auto;
  overflow-y: scroll;
  padding: 1rem;

  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  &::-webkit-scrollbar {
    width: 1.3rem;
  }

  &::-webkit-scrollbar-thumb {
    background: ${(props) =>
      props.$lightMode ? `white` : `${props.theme.colors.darkgray}`};
    background-clip: padding-box;
    border: 0.5rem solid transparent;
    border-radius: 10rem;
  }

  &::-webkit-scrollbar-track {
    border-radius: 10rem;
    background: ${(props) =>
      props.$lightMode
        ? `${props.theme.colors.gray}`
        : `${props.theme.colors.navy}`};
  }

  color: ${(props) =>
    props.$lightMode
      ? `${props.theme.colors.darknavy}`
      : `${props.theme.colors.lightgray}`};

  .markdown-body {
    box-sizing: border-box;
		min-width: 200px;
		max-width: 100%;
		margin: 0 auto;
		padding: 45px;
    background-color: inherit;
    color: inherit;
    table tr{
      background-color:inherit
    }
  }
`;
