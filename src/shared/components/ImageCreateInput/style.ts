import styled from 'styled-components';

export const RelativeBox = styled.div`
  display: flex;
  gap: 1.6rem;
  position: relative;
  padding: 1.6rem;
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

export const FileButton = styled.label`
  cursor: pointer;
  border: none;
  outline: none;
  background: ${(props) => props.theme.colors.lightblue};
  border-radius: 1rem;
  white-space: nowrap;

  padding: 1.9rem 2rem 0;

  font-weight: 700;
  font-size: 1.6rem;

  color: ${(props) => props.theme.colors.blue};
`;

export const FileHiddenButton = styled.input`
  display: none;
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
