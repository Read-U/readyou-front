import React from 'react';
import * as S from './style';
import { ProjectInputItemProps } from '@/shared/types/projectInputItem';
import UploadVideoInput from '../../UploadVideoInput';
import TechStackInput from '../../TechStackInput';
import TeamTableInput from '../../TeamTableInput';
import ImageCreateInput from '../../ImageCreateInput';
import ProjectTitle from '../../ProjectTitle';
import ProjectContent from '../../ProjectContent';
import ProjectDuration from '../../ProjectDuration';

interface ItemScript {
  [key: string]: React.ReactNode;
}

const ITEM_SCRIPT: ItemScript = {
  '프로젝트 제목': <ProjectTitle></ProjectTitle>,
  '프로젝트 설명': <ProjectContent></ProjectContent>,
  '동영상 삽입': (
    <UploadVideoInput
      type="text"
      placeholder="유튜브 링크만 입력 가능합니다!"
    />
  ),
  '기술 스택': (
    <TechStackInput
      type="text"
      placeholder="이 칸에서 기술 스택을 검색하세요!"
    />
  ),
  '팀원 테이블': <TeamTableInput />,
  '이미지 삽입': <ImageCreateInput />,
  '프로젝트 기간': <ProjectDuration></ProjectDuration>,
};
const ProjectInputItem = ({ type }: ProjectInputItemProps) => {
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
