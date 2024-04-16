import { useState, useEffect } from 'react';
import Button from '../common/Button';
import ProjectInputItem from '../common/ProjectInputItem';
import * as S from './style';
import { useRecoilState } from 'recoil';
import { projectItems, stepState } from '@/recoil/states';

const RawCode = () => {
  const [enabled, setEnabled] = useState(false);
  const [step, setStep] = useRecoilState(stepState);
  useEffect(() => {
    const animation = requestAnimationFrame(() => setEnabled(true));

    return () => {
      cancelAnimationFrame(animation);
      setEnabled(false);
    };
  }, []);

  if (!enabled) {
    return null;
  }

  return (
    <S.Inner>
      <Button type="complete" onClick={() => setStep(step - 1)}>
        뒤로가기
      </Button>
      <S.ItemListContainer>
        
      </S.ItemListContainer>
    </S.Inner>
  );
};

export default RawCode;
