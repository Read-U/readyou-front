import * as S from './style';

interface ButtonType {
  type?: 'back' | 'add';
}

const LABEL_TYPE = {
  add: '추가',
  back: '뒤로가기',
};

const Button = ({ type = 'add' }: ButtonType) => {
  return <S.Button type={type}>{LABEL_TYPE[type]}</S.Button>;
};

export default Button;
