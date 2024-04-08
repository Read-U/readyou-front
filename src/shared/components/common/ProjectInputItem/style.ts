import styled from 'styled-components';

export const HeaderContainer = styled.div`
  width: 100%;

  background: ${(props) => props.theme.colors.gray};
  border-radius: 1rem 1rem 0 0;

  padding: 2rem 1.6rem 2rem 2.4rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 1.6rem;

  color: ${(props) => props.theme.colors.darknavy};
`;

export const ButtonWrapper = styled.button`
  cursor: pointer;
  border: none;
  background-color: ${(props) => props.theme.colors.gray};
`;

export const InputBox = styled.div`
  width: 100%;
  height: 8.4rem;

  background: ${(props) => props.theme.colors.lightgray};
  border-radius: 0 0 1rem 1rem;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 1.6rem;
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.6rem;
  width: 100%;
  height: 8.4rem;
  background: ${(props) => props.theme.colors.lightgray};
  border-radius: 0 0 1rem 1rem;
`;

export const Input = styled.input`
  font-family: 'Pretendard';
  font-size: 1.4rem;
  box-shadow: none;
  outline: none;
  border: none;
  appearance: none;

  width: 100%;
  height: 5.2rem;

  background: #ffffff;
  border-radius: 1rem;

  padding: 1.6rem 2.4rem 1.6rem 2rem;

  &::placeholder {
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 400;
    font-size: 1.6rem;
    color: ${(props) => props.theme.colors.gray};
  }
`;

export const BottomWrapper = styled.div`
  width: 100%;
  height: 6.8rem;

  background: ${(props) => props.theme.colors.lightgray};
  border-radius: 0 0 1rem 1rem;

  padding: 1.6rem;
  border-top: 0.1rem solid rgba(214, 216, 229, 1);

  display: flex;
  gap: 1.2rem;
`;
