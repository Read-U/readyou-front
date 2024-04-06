import { useState } from 'react';
import * as S from './style';
type ToggleProps  = {
  lightMode: boolean;
  handleToggle: (value:boolean) => void;
};
const Toggle = ({ lightMode, handleToggle }: ToggleProps) => {
  const toggleHandler = () => {
    handleToggle(!lightMode);
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
