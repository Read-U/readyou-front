import * as S from './style';

interface ButtonType {
  type?: 'back' | 'add';
  onClick?: () => void; // Added this line
}

const LABEL_TYPE = {
  add: '추가',
  back: '뒤로가기',
};

const Button = ({ type = 'add', onClick }: ButtonType) => {
  return (
    <S.Button type={type} onClick={onClick}>
      {LABEL_TYPE[type]}
    </S.Button>
  );
};

export default Button;
