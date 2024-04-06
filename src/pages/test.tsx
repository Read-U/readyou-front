import Item from '@/shared/components/Item';
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
          <Item action="프로젝트 제목" />
          <Item action="프로젝트 설명" />
          <Item action="프로젝트 기간" />
          <Item action="이미지 삽입" />
          <Item action="동영상 삽입" />
        </S.ItemWrap>
      </S.EditorBox>
    </S.EditorContainer>
  );
}

export default test;
