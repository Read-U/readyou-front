import styled from 'styled-components';

export const EditorContainer = styled.div`
  width: 93rem;
  height: 97rem;
  border-radius: 1rem;
  background-color: ${(props) => props.theme.colors.lightgray};
  padding: 2rem;
  margin: 2rem;
`;

export const PrevButton = styled.button`
  width: 9.1rem;
  height: 5.2rem;
  padding: 1.6rem;
  margin: 2rem 0;
  border-radius: 1rem;
  background-color: ${(props) => props.theme.colors.blue};
  border: none;
  outline: none;
  font-weight: 700;
  color: ${(props) => props.theme.colors.lightgray};
  text-align: center;
`;

export const EditorBox = styled.div`
  width: 89rem;
  height: 93rem;
  background-color: ${(props) => props.theme.colors.white};
  padding: 2rem;
`;

export const ItemWrap = styled.div`
  height: 80rem;
  overflow: auto;
  padding-top: 2rem;
`;
