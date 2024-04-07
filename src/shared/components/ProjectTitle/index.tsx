import { ChangeEvent } from 'react';
import * as S from './style';
const ProjectTitle = () => {
  const handleChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    const title = `# ${e.target.value}`;
    // TODO : 추후 전역으로 상태 전달
  };

  return (
    <S.InputBox>
      <S.Input
        type="text"
        placeholder="프로젝트 제목을 기입해주세요."
        onChange={(e) => handleChangeTitle(e)}
      />
    </S.InputBox>
  );
};

export default ProjectTitle;
