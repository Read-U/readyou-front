import { ChangeEvent } from 'react';
import * as S from './style';
import { useRecoilState } from 'recoil';
import { markdownState } from '@/recoil/states';

const ProjectTitle = () => {
  const [markdown, setMarkdown] = useRecoilState(markdownState);
  const handleChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    const newMarkdown = markdown.map((item) => {
      if (item.name === 'title') {
        return { ...item, detail: `# ${e.target.value}` };
      }
      return item;
    });
    setMarkdown(newMarkdown);
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
