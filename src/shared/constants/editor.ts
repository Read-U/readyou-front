import { DefaultItemProps } from '@/shared/types/markdown';

export const DEFAULT_ITEM_LIST: DefaultItemProps[] = [
  {
    id: 0,
    name: '프로젝트 제목 / 대표 이미지 / 프로젝트 소개 / 기술 스택',
    type: 'required',
  },
  { id: 1, name: '배포링크', type: 'optional' },
  { id: 2, name: '프로젝트 기간', type: 'optional' },
  { id: 3, name: '주요 기능', type: 'optional' },
  { id: 4, name: '팀원 테이블', type: 'optional' },
  { id: 5, name: '이미지 삽입', type: 'optional' },
  { id: 6, name: '동영상 삽입', type: 'optional' },
];

export const DEFAULT_CHECKED_ITEM: DefaultItemProps[] = [
  {
    id: 0,
    name: '프로젝트 제목 / 대표 이미지 / 프로젝트 소개 / 기술 스택',
    type: 'required',
  },
  { id: 1, name: '배포링크', type: 'optional' },
  { id: 4, name: '팀원 테이블', type: 'optional' },
];
