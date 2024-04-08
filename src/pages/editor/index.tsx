import { useEffect, useState } from 'react';
import { stepState } from '@/recoil/states';
import DefaultSetting from '@/shared/components/DefaultSetting';
import Editor from '@/shared/components/Editor';
import Preview from '@/shared/components/Preview';
import { useRecoilState } from 'recoil';
import { styled } from 'styled-components';
import { TABLET_SIZE } from '@/shared/constants/media';

const EditorPageContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;

  @media (max-width: ${TABLET_SIZE}px) {
    flex-direction: column;
    align-items: center;
  }
`;

const EditorBox = styled.div`
  flex: 1;
  max-width: 50%;
  background: ${(props) => props.theme.colors.lightgray};
  border-radius: 1rem;
  margin: 2rem 0 0 2rem;
  height: calc(100vh - 2rem);
  padding: 2rem;

  @media (max-width: ${TABLET_SIZE}px) {
    max-width: 100%;
    width: 100%;
  }
`;

const EditorPage = () => {
  const [step, setStep] = useRecoilState(stepState);
  const [isSsr, setIsSsr] = useState(false);
  useEffect(() => {
    setIsSsr(true);
  }, []);

  if (!isSsr) return <></>;
  return (
    <>
      <EditorPageContainer>
        <EditorBox>
          {step === 0 && <DefaultSetting />}
          {step === 1 && <Editor />}
        </EditorBox>
        <Preview />
      </EditorPageContainer>
    </>
  );
};

export default EditorPage;
