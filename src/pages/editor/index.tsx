import { stepState } from '@/recoil/states';
import DefaultSetting from '@/shared/components/DefaultSetting';
import Editor from '@/shared/components/Editor';
import Preview from '@/shared/components/Preview';
import { useRecoilState } from 'recoil';
import { styled } from 'styled-components';

const EditorPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.colors.lightgray};
  gap: 2rem;
`;

const EditorBox = styled.div`
  flex: 1;
  height: 97.2rem;
  max-width: 50%;
  background: ${(props) => props.theme.colors.white};
  border-radius: 1rem;
  margin: 2rem 0 2rem 2rem;
  padding: 2rem;
`;

const EditorPage = () => {
  const [step, setStep] = useRecoilState(stepState);

  return (
    <EditorPageContainer>
      <EditorBox>
        {step === 0 && <DefaultSetting />}
        {step === 1 && <Editor />}
      </EditorBox>
      <Preview />
    </EditorPageContainer>
  );
};

export default EditorPage;
