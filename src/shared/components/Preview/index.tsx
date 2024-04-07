import React, { useEffect, useState } from 'react';
import * as S from './style';
import Toggle from '../common/Toggle';
import 'github-markdown-css';
import MarkdownPreview from './Markdown';
import CopyButton from './CopyButton';

const Preview = () => {
  const [lightMode, setLightMode] = useState(true);
  const handleToggle = () => {
    setLightMode((prev) => !prev);
  };

  // TODO
  // const [markdown, setMarkdown] = useRecoilState(markdownState);
  // useEffect(() => {
  //   setMarkdown(SAMPLE_MARKDOWN);
  // });

  return (
    <S.Box>
      <S.Inner $lightMode={lightMode}>
        <S.Header $lightMode={lightMode}>
          <S.HeaderWrapper>
            <S.HeaderTitle>프리뷰</S.HeaderTitle>
            <S.ToggleWrapper>
              다크/라이트 모드
              <Toggle
                lightMode={lightMode}
                handleToggle={handleToggle}
              ></Toggle>
            </S.ToggleWrapper>
          </S.HeaderWrapper>
          <CopyButton />
        </S.Header>
        <MarkdownPreview lightMode={lightMode}></MarkdownPreview>
      </S.Inner>
    </S.Box>
  );
};

export default Preview;
