import { useRecoilState } from 'recoil';
import * as S from './style';
import { ChangeEvent, useEffect, useState } from 'react';
import { projectItems } from '@/recoil/states';
import { ItemProps } from '@/shared/types/markdown';

const ProjectContent = () => {
  const [markdown, setMarkdown] = useRecoilState(projectItems);

  const newValue = markdown.find((item) => {
    if (item.name === 'content') {
      return item;
    }
  });

  const handleChangeContent = (e: ChangeEvent<HTMLInputElement>) => {
    const newMarkdown = markdown.map((item: ItemProps) => {
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
        value={newValue.detail.split(' ')[1]}
        placeholder="프로젝트 설명을 기입해주세요."
        onChange={(e) => handleChangeContent(e)}
      />
    </S.InputBox>
  );
};

export default ProjectContent;
