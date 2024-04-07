import styled from 'styled-components';

export const Checkbox = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

export const CheckboxInput = styled.input`
  width: 2rem;
  height: 2rem;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 50%;
  border: 1px solid ${(props) => props.theme.colors.gray};
  appearance: none;
  transition: all 0.1s ease-in-out;
  cursor: pointer;

  &:checked {
    background-image: url('/images/check.jpg');
    background-size: 75%;
    background-repeat: no-repeat;
    background-position: center;
  }
`;
