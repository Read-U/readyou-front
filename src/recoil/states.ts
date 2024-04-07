import { atom } from "recoil";

export const markdownState = atom<string>({
    key: 'markdownState',
    default: '',
})