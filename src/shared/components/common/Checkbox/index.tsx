import * as S from './style';

interface CheckboxProps extends React.HTMLProps<HTMLInputElement> {}

const Checkbox = (props: CheckboxProps) => {
  return (
    <S.Checkbox>
      <S.CheckboxInput type="checkbox" {...props} />
    </S.Checkbox>
  );
};

export default Checkbox;
