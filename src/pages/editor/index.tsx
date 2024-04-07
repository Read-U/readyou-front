import { stepState } from '@/recoil/states';
import DefaultSetting from '@/shared/components/DefaultSetting';
import Editor from '@/shared/components/Editor';
import Preview from '@/shared/components/Preview';
import { useRecoilState } from 'recoil';
import { styled } from 'styled-components';
import Head from 'next/head';

const EditorPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

const EditorBox = styled.div`
  flex: 1;
  height: 97.2rem;
  max-width: 50%;
  background: ${(props) => props.theme.colors.lightgray};
  border-radius: 1rem;
  margin: 2rem 0 2rem 2rem;
  padding: 2rem;
`;

const EditorPage = () => {
  const [step, setStep] = useRecoilState(stepState);

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          as="style"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
        />
        <title>Editor | READ YOU</title>
        <meta name="title" content="READ YOU" />
        <meta name="keyword" content="README, READYOU, 간편함, 프로젝트" />
        <meta name="description" content="누구나 간편하게 README.md 작성하기" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        {/* Open Graph */}
        <meta property="og:title" content="READ YOU" />
        <meta
          property="og:description"
          content="누구나 간편하게 README.md 작성하기"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="배포 링크" />
        <meta property="og:image" content="/images/kakao.png" />
        <meta property="og:image:alt" content="READ YOU 이미지" />
        <meta property="og:locale" content="ko_KR" />

        {/* Twitter */}
        <meta property="twitter:title" content="READ YOU" />
        <meta
          name="twitter:description"
          content="누구나 간편하게 README.md 작성하기"
        />
        <meta name="twitter:card" content="website" />
        <meta property="twitter:site" content="배포 링크(추가 예정)" />
        <meta name="twitter:image" content="/images/twitter.png" />
        <meta property="twitter:image:alt" content="READ YOU 이미지" />
      </Head>
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
