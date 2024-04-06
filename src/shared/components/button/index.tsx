import * as S from './style';

interface ButtonProps {
  type: 'button' | 'submit' | 'reset';
  children: React.ReactNode;
  width: number;
  bgColor: string;
  color: string;
}

function Button({ type, children, width, bgColor, color }: ButtonProps) {
  return (
    <S.Button $color={color} $width={width} $bgColor={bgColor} type={type}>
      {children}
    </S.Button>
  );
}

export default Button;
