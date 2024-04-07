import React, { useEffect, useState } from 'react';
import * as S from './style';
import Toggle from '../common/Toggle';
import 'github-markdown-css';
import MarkdownPreview from './Markdown';
import { useRecoilState } from 'recoil';
import { markdownState } from '@/recoil/states';

const Preview = () => {
  const [lightMode, setLightMode] = useState(true);
  const handleToggle = () => {
    setLightMode((prev) => !prev);
  };

  const [markdown, setMarkdown] = useRecoilState(markdownState);
  useEffect(() => {
    setMarkdown(
      `

<br>

1. hhh
2. 888
## Link   
### General link
- [🚗 Visit EASYME.md's Repo](https://github.com/EASYME-md/client)   
- [🙋‍♂️ Visit ONE:A's Github](https://github.com/onealog)

### Image link
![onealog](/assets/readme/easyme.png)   
   
<br>   
   
## Code Block   
### Code inline
- \`console.log('Hello EASYME.md!');\`   
   
### Code block
\`\`\`js
function makeDeveloper(name, language) {
  if (name === 'ONE:A' && language === 'JavaScript') {
    return 'perfect!';
  }

  return false;
}

makeDeveloper('ONE:A', 'JavaScript');
\`\`\`

<br>   
   
## Table   


| title1 | title2 | title3 |
| --- | --- | --- |
| 1 | 2 | 3 |
| 4 | 5 | 6 |
| 7 | 8 | 9 |


# 🖥 **프로젝트 개요**
`,
    );
  });

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

          <S.CopyButton>전체 복사</S.CopyButton>
        </S.Header>
        <MarkdownPreview lightMode={lightMode}></MarkdownPreview>
      </S.Inner>
    </S.Box>
  );
};

export default Preview;
