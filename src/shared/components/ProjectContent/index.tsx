import * as S from './style';
import { ChangeEvent } from 'react';

const ProjectContent = () => {
  const handleChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    const content = `### ${e.target.value}`;
    // TODO : 추후 전역상태로 전달
  };

  return (
    <S.InputBox>
      <S.Input
        type="text"
        placeholder="프로젝트 설명을 기입해주세요."
        onChange={(e) => handleChangeTitle(e)}
      />
    </S.InputBox>
  );
};

export default ProjectContent;
