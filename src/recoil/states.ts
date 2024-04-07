import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import { DEFAULT_CHECKED_ITEM } from '@/shared/constants/editor';

const sessionStorage =
  typeof window !== 'undefined' ? window.sessionStorage : undefined;
const { persistAtom } = recoilPersist({
  key: 'sessionStorage',
  storage: sessionStorage,
});

export const stepState = atom({
  key: 'stepState',
  default: 0,
  effects_UNSTABLE: [persistAtom],
});

export const defaultSettings = atom({
  key: 'defaultSettings',
  default: DEFAULT_CHECKED_ITEM,
  effects_UNSTABLE: [persistAtom],
});
