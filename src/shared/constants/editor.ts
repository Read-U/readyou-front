import { DefaultItemProps } from '@/shared/types/markdown';

export const DEFAULT_ITEM_LIST: DefaultItemProps[] = [
  {
    id: '1',
    type: '프로젝트 제목',
  },
  { id: '2', type: '이미지 삽입' },
  { id: '3', type: '프로젝트 기간' },
  { id: '4', type: '프로젝트 설명' },
  { id: '5', type: '팀원 테이블' },
  { id: '6', type: '기술 스택' },
  { id: '7', type: '동영상 삽입' },
];

export const DEFAULT_CHECKED_ITEM: DefaultItemProps[] = [
  {
    id: '1',
    type: '프로젝트 제목',
    name: 'title',
    detail: '',
  },
  { id: '4', type: '프로젝트 설명', name: 'content', detail: '' },
  { id: '5', type: '팀원 테이블', name: 'team', detail: '' },
];
