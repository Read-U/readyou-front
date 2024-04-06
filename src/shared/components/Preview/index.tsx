import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import rehypeRaw from 'rehype-raw';
import 'highlight.js/styles/github.css';
import * as S from './style';
import Toggle from '../common/Toggle';

const Preview = () => {
  const [markdown, setMd] = useState<string | undefined>(`
# 마크다운 테스트  
## 마크다운 테스트  
### 마크다운 테스트  
#### 마크다운 테스트  
##### 마크다운 테스트  
###### 마크다운 테스트  
<table>
    <tr>
        <td height="140px" align="center"> <a href="https://github.com/swy0123">
        <img src="https://avatars.githubusercontent.com/swy0123" /> <br><br> 🐲 이시영 <br>(Front-End) </a> <br></td>
        <td height="140px" align="center"> <a href="https://github.com/swy0123">
        <img src="https://avatars.githubusercontent.com/swy0123" /> <br><br> 🐲 이시영 <br>(Front-End) </a> <br></td>
        <td height="140px" align="center"> <a href="https://github.com/swy0123">
        <img src="https://avatars.githubusercontent.com/swy0123" /> <br><br> 🐲 이시영 <br>(Front-End) </a> <br></td>
        <td height="140px" align="center"> <a href="https://github.com/swy0123">
        <img src="https://avatars.githubusercontent.com/swy0123" /> <br><br> 🐲 이시영 <br>(Front-End) </a> <br></td>
        <td height="140px" align="center"> <a href="https://github.com/swy0123">
        <img src="https://avatars.githubusercontent.com/swy0123" /> <br><br> 🐲 이시영 <br>(Front-End) </a> <br></td>
        <td height="140px" align="center"> <a href="https://github.com/swy0123">
        <img src="https://avatars.githubusercontent.com/swy0123" /> <br><br> 🐲 이시영 <br>(Front-End) </a> <br></td>
    </tr>
</table>

#### 마크다운 테스트   
##### 마크다운 테스트  
#### 마크다운 테스트  
##### 마크다운 테스트  
#### 마크다운 테스트  
##### 마크다운 테스트  
###### 마크다운 테스트  
#### 마크다운 테스트  
##### 마크다운 테스트 
##### 마크다운 테스트  
#### 마크다운 테스트  
##### 마크다운 테스트  
#### 마크다운 테스트  
##### 마크다운 테스트  
#### 마크다운 테스트  
##### 마크다운 테스트  
#### 마크다운 테스트  
##### 마크다운 테스트  
#### 마크다운 테스트  
###### 마크다운 테스트  
##### 마크다운 테스트  
#### 마크다운 테스트  
##### 마크다운 테스트  
#### 마크다운 테스트  
##### 마크다운 테스트  
#### 마크다운 테스트  
##### 마크다운 테스트  
#### 마크다운 테스트  
##### 마크다운 테스트  
#### 마크다운 테스트  
##### 마크다운 테스트  
#### 마크다운 테스트  
##### 마크다운 테스트  
#### 마크다운 테스트  
##### 마크다운 테스트  
#### 마크다운 테스트  
##### 마크다운 테스트  
###### 마크다운 테스트  
#### 마크다운 테스트  
##### 마크다운 테스트  
#### 마크다운 테스트  
##### 마크다운 테스트  
#### 마크다운 테스트  
##### 마크다운 테스트  
#### 마크다운 테스트  
##### 마크다운 테스트  
---  
##### 마크다운 테스트  
---
`);

  const [lightMode, setLightMode] = useState(true);
  const handleToggle = (value:boolean) => {
    setLightMode(value);
  };

  return (
    <S.Box>
      <S.Inner $lightMode={lightMode}>
        <S.Header $lightMode={lightMode}>
          <S.HeaderWrapper>
            <S.HeaderTitle>프리뷰</S.HeaderTitle>
            <S.ToggleWrapper>
              다크/라이트 모드<Toggle handleToggle={handleToggle}></Toggle>
            </S.ToggleWrapper>
          </S.HeaderWrapper>

          <S.CopyButton>전체 복사</S.CopyButton>
        </S.Header>
        <S.PreviewContainer $lightMode={lightMode}>
          <ReactMarkdown rehypePlugins={[rehypeHighlight, rehypeRaw]}>
            {markdown}
          </ReactMarkdown>
        </S.PreviewContainer>
      </S.Inner>
    </S.Box>
  );
};

export default Preview;
