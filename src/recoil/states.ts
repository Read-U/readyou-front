import { atom } from 'recoil';
import { DEFAULT_CHECKED_ITEM } from '@/shared/constants/editor';
import { MarkdownProps } from '@/shared/types/markdown';

export const markdownState = atom<MarkdownProps[]>({
  key: 'markdownState',
  default: [
    { id: '1', type: '프로젝트 제목', name: 'title', detail: '' },
    { id: '4', type: '프로젝트 설명', name: 'content', detail: '' },
  ],
});

export const stepState = atom<number>({
  key: 'stepState',
  default: 0,
});

export const defaultSettings = atom({
  key: 'defaultSettings',
  default: DEFAULT_CHECKED_ITEM,
});
