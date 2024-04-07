import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  gap: 1.6rem;
  padding: 1.6rem;
  width: 100%;
  height: 8.4rem;
  background: ${(props) => props.theme.colors.lightgray};
  border-radius: 0 0 1rem 1rem;
`;

export const InputWrapper = styled.div`
  width: 100%;
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

export const ReletiveBox = styled.div`
  width: 100%;
  position: relative;
`;

export const MatchList = styled.ul`
  position: absolute;
  top: 5.45rem;
  width: 100%;
  z-index: 999;
`;

export const MatchItem = styled.li`
  cursor: pointer;
  font-size: 1.6rem;
  padding: 1.6rem 2.4rem 1.6rem 2rem;
  color: ${(props) => props.theme.colors.blue};
  background: #ffffff;
  width: 100%;
  border: ${(props) => `1px solid ${props.theme.colors.darkgray}`};
  border-top: none;

  &:nth-of-type(1) {
    border-top: ${(props) => `1px solid ${props.theme.colors.darkgray}`};
    border-radius: 0.7rem 0.7rem 0 0;
  }

  &:last-of-type {
    border-radius: 0 0 0.7rem 0.7rem;
  }

  &:hover {
    background-color: ${(props) => props.theme.colors.lightgray};
  }
`;

export const BottomWrapper = styled.div`
  width: 100%;
  height: auto;
  background: ${(props) => props.theme.colors.lightgray};
  border-radius: 0 0 1rem 1rem;
  padding: 1.6rem;
  border-top: 0.1rem solid rgba(214, 216, 229, 1);
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem;
`;
