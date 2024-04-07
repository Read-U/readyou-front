import { useRecoilState } from 'recoil';
import * as S from './style';
import { ChangeEvent } from 'react';
import { defaultSettings } from '@/recoil/states';

const ProjectContent = () => {
  const [markdown, setMarkdown] = useRecoilState(defaultSettings);

  const handleChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    const newMarkdown = markdown.map((item) => {
      if (item.name === 'content') {
        return { ...item, detail: `### ${e.target.value}` };
      }
      return item;
    });
    setMarkdown(newMarkdown);
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
