import * as S from './style';

export interface BadgeProps {
  type: 'required' | 'optional';
}

const Badge = ({ type }: BadgeProps) => {
  return (
    <S.Badge type={type}> {type === 'optional' ? '옵션' : '필수'}</S.Badge>
  );
};

export default Badge;
