import styled from 'styled-components';

export const AdditionalItem = styled.div`
  width: 15.2rem;
  height: 3.6rem;
  border-radius: 1rem;
  background-color: ${(props) => props.theme.colors.white};
  display: flex;
  gap: 0.8rem;
  justify-content: space-between;
  padding: 0 1.2rem;
  align-items: center;
`;

export const AdditionalText = styled.span`
  color: ${(props) => props.theme.colors.darknavy};
  font-size: 1.6rem;
`;

export const DeleteIconBackGround = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.gray};
  position: relative;
`;

export const DeleteIcon = styled.img`
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;
`;
