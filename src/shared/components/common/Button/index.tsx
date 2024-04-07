import * as S from './style';

interface ButtonType {
  type?: 'back' | 'add' | 'copy' | 'complete';
  onClick?: () => void;
  children: React.ReactNode;
}

const Button = ({ type = 'add', onClick, children }: ButtonType) => {
  return (
    <S.Button type={type} onClick={onClick}>
      {children}
    </S.Button>
  );
};

export default Button;
