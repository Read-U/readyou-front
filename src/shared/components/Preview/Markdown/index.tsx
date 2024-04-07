import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import rehypeRaw from 'rehype-raw';
import * as S from './style';
import 'github-markdown-css';
import remarkGfm from 'remark-gfm';

interface Markdown {
  markdown: string;
  lightMode: boolean;
}

const MarkdownPreview = ({ lightMode, markdown }: Markdown) => {
  return (
    <S.PreviewContainer $lightMode={lightMode}>
      <ReactMarkdown
        className="markdown-body"
        rehypePlugins={[remarkGfm, rehypeHighlight, rehypeRaw]}
      >
        {markdown}
      </ReactMarkdown>
    </S.PreviewContainer>
  );
};

export default MarkdownPreview;
