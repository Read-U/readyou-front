import { BadgeProps } from '@/shared/components/common/Badge';
import styled from 'styled-components';

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
    props.isRequired
      ? props.theme.colors.lightgray
      : props.theme.colors.lightnavy};
  background-color: ${(props) =>
    props.isRequired ? props.theme.colors.navy : props.theme.colors.gray};
`;
