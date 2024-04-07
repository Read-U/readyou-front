import { useRecoilState } from 'recoil';
import * as S from './style';
import { ChangeEvent, useEffect, useState } from 'react';
import { projectItems } from '@/recoil/states';

const ProjectContent = () => {
  const [content, setContent] = useState('');
  const [markdown, setMarkdown] = useRecoilState(projectItems);

  useEffect(() => {
    const newMarkdown = markdown.map((item) => {
      if (item.name === 'content') {
        return { ...item, detail: `### ${content}` };
      }
      return item;
    });

    setMarkdown(newMarkdown);
  }, [content]);

  const handleChangeContent = (e: ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  return (
    <S.InputBox>
      <S.Input
        type="text"
        value={content}
        placeholder="프로젝트 설명을 기입해주세요."
        onChange={(e) => handleChangeContent(e)}
      />
    </S.InputBox>
  );
};

export default ProjectContent;
