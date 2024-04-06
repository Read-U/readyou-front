import * as S from './style';

interface ButtonType {
  type?: 'back' | 'add';
}

const Button = ({ type = 'add' }: ButtonType) => {
  return (
    <S.Button type={type}>{type === 'add' ? '추가' : '뒤로가기'}</S.Button>
  );
};

export default Button;
