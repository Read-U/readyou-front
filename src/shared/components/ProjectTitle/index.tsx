import { ChangeEvent, useState } from 'react';
import * as S from './style';
import { useRecoilState } from 'recoil';
import { projectItems } from '@/recoil/states';

const ProjectTitle = () => {
  const [title, setTitle] = useState('');
  const [markdown, setMarkdown] = useRecoilState(projectItems);

  const handleChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);

    const newMarkdown = markdown.map((item) => {
      if (item.name === 'title') {
        return { ...item, detail: `# ${e.target.value}` };
      }
      return item;
    });

    console.log(newMarkdown);
    setMarkdown(newMarkdown);
  };

  return (
    <S.InputBox>
      <S.Input
        type="text"
        value={title}
        placeholder="프로젝트 제목을 기입해주세요."
        onChange={(e) => handleChangeTitle(e)}
      />
    </S.InputBox>
  );
};

export default ProjectTitle;
