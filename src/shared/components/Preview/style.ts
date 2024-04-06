import { styled } from 'styled-components';

export const Box = styled.div`
  width: 93rem;
  height: 97.2rem;

  background: ${(props) => props.theme.colors.lightgray};
  border-radius: 1rem;
  margin: 2rem;
  padding: 2rem;
`;

export const Inner = styled.div<{ $lightMode: boolean }>`
  position: relative;
  width: 89rem;
  height: 93.2rem;
  overflow: hidden;
  background: ${(props) =>
    props.$lightMode ? `#FFFFFF` : `${props.theme.colors.lightnavy}`};
  border-radius: 1rem;
  transition: all 0.4s ease-in-out;
`;

export const Header = styled.div<{ $lightMode: boolean }>`
  position: relative;
  width: 100%;
  height: 9.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${(props) =>
    props.$lightMode
      ? `${props.theme.colors.darknavy}`
      : `${props.theme.colors.lightgray}`};
  background: ${(props) =>
    props.$lightMode
      ? `${props.theme.colors.gray}`
      : `${props.theme.colors.navy}`};
  padding: 1rem;
  transition: all 0.4s ease-in-out;
`;
export const HeaderWrapper = styled.div`
  position: relative;
  font-size: 1.9rem;
`;

export const HeaderTitle = styled.div`
  position: relative;
  font-weight: bold;
`;
export const ToggleWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CopyButton = styled.div`
  position: relative;
  left: 0;
  width: 9.9rem;
  height: 5.2rem;
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.9rem;
  cursor: pointer;
  color: ${(props) => props.theme.colors.lightblue};
  background: ${(props) => props.theme.colors.blue};
  &:hover {
    color: ${(props) => props.theme.colors.blue};
    background: ${(props) => props.theme.colors.lightblue};
  }
`;

export const PreviewContainer = styled.div<{ $lightMode: boolean }>`
  overflow: auto;
  height: 83rem;
  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    border-radius: 6px;
    background: rgba(255, 255, 255, 0.4);
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.3);
    border-radius: 6px;
  }
  width: 100%;
  transition: all 0.2s ease-in-out;
  color: ${(props) =>
    props.$lightMode
      ? `${props.theme.colors.darknavy}`
      : `${props.theme.colors.lightgray}`};
  code {
    padding: 3px 6px;
    font-family: 'Pretendard', 'Malgun Gothic', sans-serif;
  }
  h1 {
    font-size: xx-large;
    padding: 3px 6px;
    font-family: 'Pretendard', 'Malgun Gothic', sans-serif;
  }
  h2 {
    font-size: x-large;
    padding: 3px 6px;
    font-family: 'Pretendard', 'Malgun Gothic', sans-serif;
  }
  h3 {
    font-size: large;
    padding: 3px 6px;
    font-family: 'Pretendard', 'Malgun Gothic', sans-serif;
  }
  h4 {
    font-size: medium;
    padding: 3px 6px;
    font-family: 'Pretendard', 'Malgun Gothic', sans-serif;
  }
  h5 {
    font-size: small;
    padding: 3px 6px;
    font-family: 'Pretendard', 'Malgun Gothic', sans-serif;
  }
  h6 {
    font-size: smaller;
    padding: 3px 6px;
    font-family: 'Pretendard', 'Malgun Gothic', sans-serif;
  }
  img {
    width: 100%;
  }
`;
