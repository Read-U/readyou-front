import { BadgeProps } from '@/shared/components/common/Badge';
import styled, { css } from 'styled-components';

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
  color: ${(props) =>
    props.type === 'optional'
      ? props.theme.colors.lightnavy
      : props.theme.colors.lightgray};
  background-color: ${(props) =>
    props.type === 'optional'
      ? props.theme.colors.gray
      : props.theme.colors.navy};
`;
