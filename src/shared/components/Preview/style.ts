import { styled } from 'styled-components';

export const Box = styled.div`

  background: ${(props) => props.theme.colors.lightgray};
  border-radius: 1rem;
  margin: 2rem 2rem 2rem 0;
  padding: 2rem;
`;

export const Inner = styled.div<{ $lightMode: boolean }>`
  position: relative;
  overflow: hidden;
  background: ${(props) =>
    props.$lightMode ? `#FFFFFF` : `${props.theme.colors.lightnavy}`};
  border-radius: 1rem;
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
`;
export const HeaderWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-left: 1rem;
  margin-top: 1rem;
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