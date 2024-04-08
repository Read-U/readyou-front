import { TABLET_SIZE } from '@/shared/constants/media';
import { styled } from 'styled-components';

export const Box = styled.div`
  flex: 1;
  max-width: 50%;

  background: ${(props) => props.theme.colors.lightgray};
  border-radius: 1rem;
  margin: 2rem 2rem 2rem 0;
  padding: 2rem;
  height: calc(100vh - 2rem);

  @media (max-width: ${TABLET_SIZE}px) {
    max-width: 100%;
    width: 100%;
    margin: 0 0 0 2rem;
  }
`;

export const Inner = styled.div<{ $lightMode: boolean }>`
  position: relative;
  width: 100%;
  height: calc(100vh - 6.4rem);

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
  padding: 2rem 2rem 1.6rem 2rem;
`;
export const HeaderWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  font-size: 1.9rem;
`;

export const HeaderTitle = styled.div`
  position: relative;
  font-weight: bold;
  font-size: 1.6rem;
`;
export const ToggleWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.6rem;
`;
