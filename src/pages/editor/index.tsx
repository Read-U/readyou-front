import { useEffect, useState } from 'react';
import { stepState } from '@/recoil/states';
import DefaultSetting from '@/shared/components/DefaultSetting';
import Editor from '@/shared/components/Editor';
import Preview from '@/shared/components/Preview';
import { useRecoilState } from 'recoil';
import { styled } from 'styled-components';
import { TABLET_SIZE } from '@/shared/constants/media';
import RawCode from '@/shared/components/RawCode';

const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 6.8rem;
  background-color: ${(props) => props.theme.colors.lightgray};
`;

const HeaderTitle = styled.h1`
  color: ${(props) => props.theme.colors.darknavy};
  font-size: 2.4rem;
  font-weight: 900;
`;

const EditorPageContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  height: calc(100vh - 6.8rem);

  @media (max-width: ${TABLET_SIZE}px) {
    flex-direction: column;
    align-items: center;
    height: 100%;
  }
`;

const EditorBox = styled.div`
  flex: 1;
  max-width: 50%;
  background: ${(props) => props.theme.colors.lightgray};
  border-radius: 1rem;
  margin: 2rem 0 0 2rem;
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
      <Header>
        <HeaderTitle>READ YOU</HeaderTitle>
      </Header>
      <EditorPageContainer>
        <EditorBox>
          {step === 0 && <DefaultSetting />}
          {step === 1 && <Editor />}
          {step === 2 && <RawCode />}
        </EditorBox>
        <Preview />
      </EditorPageContainer>
    </>
  );
};

export default EditorPage;
