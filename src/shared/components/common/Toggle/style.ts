import { styled } from 'styled-components';

export const ToggleWrapper = styled.div`
  display: flex;
  z-index: 0;
  margin-left: 1rem;
`;

export const CheckBox = styled.input`
  display: none;
`;

export const ToggleBack = styled.label<{$isLightMode:boolean}>`
  z-index: 5;
  width: 5.2rem;
  height: 3.2rem;
  border-radius: 10rem;
  background-color: ${(props) =>
    props.$isLightMode
      ? `${props.theme.colors.gray}`
      : `${props.theme.colors.darknavy}`};
  transition: all 0.4s ease-in-out;
`;

export const ToggleLabel = styled.label<{$isLightMode:boolean}>`
  z-index: 10;
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 2.4rem;
  position: absolute;
  /* overflow: hidden; */
  margin-top: 0.4rem;
  margin-left: ${(props) => (props.$isLightMode ? `0.4rem` : `2.4rem`)};
  background-color: ${(props) =>
    props.$isLightMode
      ? `${props.theme.colors.pink}`
      : `${props.theme.colors.lightgray}`};
  border: solid 0.3rem;
  border-color: ${(props) =>
    props.$isLightMode
      ? `${props.theme.colors.lightgray}`
      : `${props.theme.colors.lightnavy}`};
  transition: all 0.4s ease-in-out;
`;

export const InnerCircle = styled.label<{$isLightMode:boolean}>`
  z-index: 15;
  width: 1.3rem;
  height: 1.3rem;
  position: absolute;
  /* margin-top: 0.3rem;
  margin-left: 0.3rem; */
  border-radius: 1.8rem;
  ${(props) =>
    props.$isLightMode
      ? ''
      : `background-color: ${props.theme.colors.lightnavy}`};
      transition: all 0.2s ease-in-out;
`;
