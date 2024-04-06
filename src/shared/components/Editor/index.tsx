import Button from '../common/Button';
import ProjectInputItem from '../common/ProjectInputItem';
import * as S from './style';

const Editor = () => {
  return (
    <S.Box>
      <S.Inner>
        <Button type="back" />
        <S.ItemContainer>
          <ProjectInputItem type="프로젝트 제목" />
          <ProjectInputItem type="이미지 삽입" isBottom={true} />
          <ProjectInputItem type="프로젝트 기간" />
          <ProjectInputItem type="프로젝트 설명" />
          <ProjectInputItem type="팀원 테이블" />
          <ProjectInputItem type="기술 스택" />
          <ProjectInputItem type="동영상 삽입" />
        </S.ItemContainer>
      </S.Inner>
    </S.Box>
  );
};

export default Editor;
