import { MarkdownProps, SampleMarkdown } from '../types/markdown';

export const isSampleMarkdown = (
  markdown: MarkdownProps[] | SampleMarkdown,
) => {
  return typeof markdown === 'string';
};
