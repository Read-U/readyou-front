import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import { ITEM_LIST } from '@/shared/constants/editor';

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

export const projectItems = atom({
  key: 'projectItems',
  default: ITEM_LIST,
  effects_UNSTABLE: [persistAtom],
});
