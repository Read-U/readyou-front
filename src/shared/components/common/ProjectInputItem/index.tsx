import React from 'react';
import * as S from './style';
import { ProjectInputItemProps } from '@/shared/types/projectInputItem';
import UploadVideoInput from '../../UploadVideoInput';
import TechStackInput from '../../TechStackInput';
import TeamTableInput from '../../TeamTableInput';
import ImageCreateInput from '../../ImageCreateInput';

interface ItemScript {
  [key: string]: React.ReactNode;
}

const ITEM_SCRIPT: ItemScript = {
  '프로젝트 제목': (
    <S.InputBox>
      <S.Input type="text" placeholder="프로젝트 제목을 기입해주세요." />
    </S.InputBox>
  ),
  '프로젝트 설명': (
    <S.InputBox>
      <S.Input type="text" placeholder="프로젝트 설명을 기입해주세요." />
    </S.InputBox>
  ),
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
