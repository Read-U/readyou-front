import { useState } from 'react';
import * as S from './style';

const Toggle = () => {
  const [lightMode, setLightMode] = useState(true);

  const toggleHandler = () => {
    setLightMode(!lightMode);
  };

  return (
    <S.ToggleWrapper>
      <S.CheckBox type="checkbox" id="toggleBtn" onChange={toggleHandler} />
      <S.ToggleBack htmlFor="toggleBtn" isLightMode={lightMode}></S.ToggleBack>
      <S.ToggleLabel htmlFor="toggleBtn" isLightMode={lightMode}>
        <S.InnerCircle
          htmlFor="toggleBtn"
          isLightMode={lightMode}
        ></S.InnerCircle>
      </S.ToggleLabel>
    </S.ToggleWrapper>
  );
};

export default Toggle;
