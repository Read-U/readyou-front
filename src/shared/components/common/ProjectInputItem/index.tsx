import React from 'react';
import * as S from './style';
import { ProjectInputItemProps } from '@/shared/types/projectInputItem';
import Button from '../Button';

import TechStackInput from '../../TechStackInput';
import TeamTableInput from '../../TeamTableInput';
import ImageCreateInput from '../../ImageCreateInput';
import ProjectTitle from '../../ProjectTitle';
import ProjectContent from '../../ProjectContent';

interface ItemScript {
  [key: string]: React.ReactNode;
}

const ITEM_SCRIPT: ItemScript = {
  '프로젝트 제목': <ProjectTitle></ProjectTitle>,
  '프로젝트 설명': <ProjectContent></ProjectContent>,
  '동영상 삽입': (
    <S.InputBox>
      <S.InputContainer>
        <S.Input
          type="text"
          placeholder="선택한 영상 파일 제목이 보여집니다."
        />
        <Button />
      </S.InputContainer>
    </S.InputBox>
  ),
  '기술 스택': (
    <TechStackInput
      type="text"
      placeholder="이 칸에서 기술 스택을 검색하세요!"
    />
  ),
  '팀원 테이블': <TeamTableInput />,
  '이미지 삽입': <ImageCreateInput />,
  '프로젝트 기간': (
    <S.InputBox>
      <S.InputContainer>
        <S.Input
          type="date"
          placeholder="시작한 날짜를 입력하세요. ex) 2***.**.**"
        />
        <img src="/assets/icons/range.svg" />
        <S.Input
          type="date"
          placeholder="완료한 날짜를 입력하세요. ex) 2***.**.**"
        />
      </S.InputContainer>
    </S.InputBox>
  ),
};
const ProjectInputItem = ({
  type,
  isBottom = false,
}: ProjectInputItemProps) => {
  return (
    <div>
      <S.HeaderContainer>
        <S.Title>{type}</S.Title>
        <S.ButtonWrapper>
          <img src="/assets/icons/trashcanButton.svg" alt="trashcan" />
        </S.ButtonWrapper>
      </S.HeaderContainer>
      {ITEM_SCRIPT[type]}
    </div>
  );
};

export default ProjectInputItem;
