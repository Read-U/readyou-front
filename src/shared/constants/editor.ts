import { ItemProps } from '@/shared/types/markdown';

export const ITEM_LIST: ItemProps[] = [
  {
    id: '1',
    type: '프로젝트 제목',
    name: 'title',
    detail: '',
  },
  {
    id: '4',
    type: '프로젝트 설명',
    name: 'content',
    detail: '',
  },
  {
    id: '5',
    type: '팀원 구성',
    name: 'teamTable',
    detail: '',
  },
];

export const DEFAULT_ITEM_LIST: ItemProps[] = [
  {
    id: '1',
    type: '프로젝트 제목',
    name: 'title',
    detail: '',
  },
  {
    id: '2',
    type: '이미지 삽입',
    name: 'image',
    detail: '',
    imageNameList: [],
  },
  {
    id: '3',
    type: '프로젝트 기간',
    name: 'period',
    detail: '',
  },
  {
    id: '4',
    type: '프로젝트 설명',
    name: 'content',
    detail: '',
  },
  {
    id: '5',
    type: '팀원 구성',
    name: 'teamTable',
    detail: '',
    teamMembers: [],
  },
  {
    id: '6',
    type: '기술 스택',
    name: 'techStack',
    detail: '',
  },
  {
    id: '7',
    type: '동영상 삽입',
    name: 'video',
    detail: '',
  },
];
