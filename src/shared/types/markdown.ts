import { SAMPLE_MARKDOWN } from '../constants/markdown';

export interface DefaultItemProps {
  id: string;
  type: string;
}

export interface MarkdownProps {
  id: string;
  type: string;
  name: string;
  detail: string;
}

export type SampleMarkdown = typeof SAMPLE_MARKDOWN;
