import TemplateItem from '@/shared/components/TemplateItem';
import Button from '@/shared/components/button';
import * as S from './style';

function test() {
  return (
    <S.EditorContainer>
      <S.EditorBox>
        <Button type="button" width={91} bgColor="blue" color="lightgray">
          뒤로 가기
        </Button>
        <S.ItemWrap>
          <TemplateItem action="프로젝트 제목" />
          <TemplateItem action="프로젝트 설명" />
          <TemplateItem action="프로젝트 기간" />
          <TemplateItem action="이미지 삽입" />
          <TemplateItem action="동영상 삽입" />
          <TemplateItem action="팀원 테이블" />
          <TemplateItem action="기술 스택 뱃지" />
        </S.ItemWrap>
      </S.EditorBox>
    </S.EditorContainer>
  );
}

export default test;
