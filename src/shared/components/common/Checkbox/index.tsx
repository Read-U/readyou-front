import * as S from './style';

interface CheckboxProps extends React.HTMLProps<HTMLInputElement> {}

const Checkbox = ({ checked }: CheckboxProps) => {
  return (
    <S.Checkbox>
      <S.CheckboxInput type="checkbox" checked={checked} />
    </S.Checkbox>
  );
};

export default Checkbox;
