import { atom } from 'recoil';
import { DEFAULT_CHECKED_ITEM } from '@/shared/constants/editor';

export const stepState = atom<number>({
  key: 'stepState',
  default: 0,
});

export const defaultSettings = atom({
  key: 'defaultSettings',
  default: DEFAULT_CHECKED_ITEM,
});
