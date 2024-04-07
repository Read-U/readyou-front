import React, { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import rehypeRaw from 'rehype-raw';
import * as S from './style';
import 'github-markdown-css';
import remarkGfm from 'remark-gfm';
import { useRecoilValue } from 'recoil';
import { projectItems } from '@/recoil/states';
import { ItemProps } from '@/shared/types/markdown';

interface Markdown {
  lightMode: boolean;
}

const MarkdownPreview = ({ lightMode }: Markdown) => {
  const markdown = useRecoilValue(projectItems);

  useEffect(() => {
    console.log(markdown.map((v: ItemProps) => v.detail).join('\n'));
  }, [markdown]);

  return (
    <S.PreviewContainer $lightMode={lightMode}>
      <ReactMarkdown
        className="markdown-body"
        rehypePlugins={[remarkGfm, rehypeHighlight, rehypeRaw]}
      >
        {markdown.map((v: ItemProps) => v.detail).join('\n')}
      </ReactMarkdown>
    </S.PreviewContainer>
  );
};

export default MarkdownPreview;
