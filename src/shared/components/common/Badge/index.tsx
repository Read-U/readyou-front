import * as S from './style';

export interface BadgeProps {
  isRequired?: boolean;
}

const Badge = ({ isRequired }: BadgeProps) => {
  return (
    <S.Badge $isrequired={isRequired}> {isRequired ? '필수' : '옵션'}</S.Badge>
  );
};

export default Badge;
