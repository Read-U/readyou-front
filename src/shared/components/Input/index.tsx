import * as S from './style';

interface InputProps {
  labelText: string;
  type: string;
  placeholder: string;
  width: number;
}

function Input({ labelText, type, placeholder, width }: InputProps) {
  return (
    <>
      <S.HiddenLabel htmlFor={labelText}>{labelText}</S.HiddenLabel>
      <S.Input
        id={labelText}
        type={type}
        placeholder={placeholder}
        $width={width}
      />
    </>
  );
}

export default Input;
