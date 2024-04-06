import Image from 'next/image';
import { styled } from 'styled-components';

export const Tittle = styled.p`
  font-size: 4.8rem;
  font-weight: 900;
  color: ${(props) => props.theme.colors.darknavy};
  text-align: center;
  line-height: 5.728rem;
`;

export const SubTitle = styled.p`
  font-size: 2rem;
  font-weight: 500;
  color: ${(props) => props.theme.colors.lightnavy};
  text-align: center;
  line-height: 3rem;
  text-shadow: 1px 4px 2px rgba(0, 0, 0, 0.1);
`;

export const TitleContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
`;

export const BlueText = styled.span`
  color: ${(props) => props.theme.colors.blue};
`;

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;
  padding-top: 10rem;
  background: linear-gradient(
    ${(props) => props.theme.colors.lightblue},
    white
  );
  overflow: hidden;
`;

export const Button = styled.button`
  width: 28.2rem;
  height: 5.2rem;
  color: white;
  font-size: 1.6rem;
  font-weight: 700;
  border: none;
  border-radius: 1rem;
  cursor: pointer;
  background-color: ${(props) => props.theme.colors.blue};
`;

export const StyledImage = styled(Image)`
  max-width: 129.6rem;
  width: 100%;
  height: auto;
`;
