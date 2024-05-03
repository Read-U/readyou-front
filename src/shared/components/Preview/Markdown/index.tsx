import React, { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import rehypeRaw from 'rehype-raw';
import * as S from './style';
import 'github-markdown-css';
import remarkGfm from 'remark-gfm';
import { useRecoilState, useRecoilValue } from 'recoil';
import { markdown, projectItems } from '@/recoil/states';
import { ItemProps } from '@/shared/types/markdown';

interface Markdown {
  lightMode: boolean;
}

const MarkdownPreview = ({ lightMode }: Markdown) => {
  const itemList = useRecoilValue(projectItems);
  const [markdownText, setMarkdown] = useRecoilState(markdown);

  useEffect(() => {
    setMarkdown(itemList.map((v: ItemProps) => v.detail).join('\n'));
  }, [itemList]);

  return (
    <S.PreviewContainer $lightMode={lightMode}>
      <ReactMarkdown
        className="markdown-body"
        rehypePlugins={[remarkGfm, rehypeHighlight, rehypeRaw]}
      >
        {markdownText}
      </ReactMarkdown>
    </S.PreviewContainer>
  );
};

export default MarkdownPreview;
