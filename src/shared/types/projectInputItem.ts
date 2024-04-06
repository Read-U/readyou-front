export interface ProjectInputItemProps {
  type:
    | '프로젝트 제목'
    | '프로젝트 설명'
    | '동영상 삽입'
    | '기술 스택'
    | '팀원 테이블'
    | '이미지 삽입'
    | '프로젝트 기간';
  isBottom?: boolean;
}
