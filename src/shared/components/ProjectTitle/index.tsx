import { ChangeEvent } from 'react';
import * as S from './style';
import { useRecoilState } from 'recoil';
import { projectItems } from '@/recoil/states';

const ProjectTitle = () => {
  const [markdown, setMarkdown] = useRecoilState(projectItems);

  const newValue = markdown.find((item) => {
    if (item.name === 'title') {
      return item;
    }
  });

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
        value={newValue?.detail?.split('#')[1]?.replace(/^\s+/, '')}
        placeholder="프로젝트 제목을 기입해주세요."
        onChange={(e) => handleChangeTitle(e)}
      />
    </S.InputBox>
  );
};

export default ProjectTitle;
