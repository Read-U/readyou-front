import { useState } from 'react';
import * as S from './style';
type Props = {
  handleToggle: (value:boolean) => void;
};
const Toggle: React.FC<Props> = ({ handleToggle }) => {
  const [lightMode, setLightMode] = useState(true);

  const toggleHandler = () => {
    handleToggle(!lightMode);
    setLightMode(!lightMode);
  };

  return (
    <S.ToggleWrapper>
      <S.CheckBox
        type="checkbox"
        id="toggleBtn"
        onClick={() => toggleHandler()}
      />
      <S.ToggleBack htmlFor="toggleBtn" $isLightMode={lightMode}></S.ToggleBack>
      <S.ToggleLabel htmlFor="toggleBtn" $isLightMode={lightMode}>
        <S.InnerCircle
          htmlFor="toggleBtn"
          $isLightMode={lightMode}
        ></S.InnerCircle>
      </S.ToggleLabel>
    </S.ToggleWrapper>
  );
};

export default Toggle;
