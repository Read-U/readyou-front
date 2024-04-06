import { BadgeProps } from '@/shared/components/common/Badge';
import styled, { css } from 'styled-components';

const getBackgroundColor = (type: BadgeProps['type']) => {
  switch (type) {
    case 'optional':
      return css`
        background-color: ${(props) => props.theme.colors.gray};
      `;
    case 'required':
      return css`
        background-color: ${(props) => props.theme.colors.darkgray};
      `;
    default:
      return css`
        background-color: ${(props) => props.theme.colors.lightgray};
      `;
  }
};

export const Badge = styled.div<BadgeProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 100%;
  border-radius: 1rem;
  font-weight: 700;
  font-size: 1.6rem;
  padding: 0.25rem 0.5rem;
  color: ${(props) => props.theme.colors.lightnavy};
  ${(props) => getBackgroundColor(props.type)};
`;
