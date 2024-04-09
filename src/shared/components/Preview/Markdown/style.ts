import { styled } from 'styled-components';

export const PreviewContainer = styled.div<{ $lightMode: boolean }>`
  position: relative;
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  width: calc(100% - 2rem);
  height: calc(100vh - 23rem);
  margin: 1rem;

  overflow: auto;

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
    padding: 2rem;
    background-color: inherit;
    color: inherit;
    table tr {
      background-color: inherit;
    }
    strong {
      font-weight: bold;
    }
    ol {
      list-style: decimal;
    }
    menu,
    ul {
      list-style: disc;
    }
    img {
      background-color: inherit;
    }
  }
  /* > div {
    height: calc(100vh - 13.4rem);
    overflow: auto;
  } */
`;
