import UploadItem from '../UploadItem';
import * as S from './style';
import TechStackInput from '../Input';

import { ProjectInputItemProps } from '@/shared/types/projectInputItem';
import Button from '../Button';

interface ItemScript {
  [key: string]: React.ReactNode;
}

const ITEM_SCRIPT: ItemScript = {
  '프로젝트 제목': (
    <S.InputContainer>
      <S.Input type="text" placeholder="프로젝트 제목을 기입해주세요." />
    </S.InputContainer>
  ),
  '프로젝트 설명': (
    <S.InputContainer>
      <S.Input type="text" placeholder="프로젝트 설명을 기입해주세요." />
    </S.InputContainer>
  ),
  '동영상 삽입': (
    <S.InputContainer>
      <S.Input type="text" placeholder="선택한 영상 파일 제목이 보여집니다." />
      <Button />
    </S.InputContainer>
  ),
  '기술 스택': (
    <TechStackInput
      type="text"
      placeholder="이 칸에서 기술 스택을 검색하세요!"
    />
  ),
  '팀원 테이블': (
    <S.InputContainer>
      <S.Input type="text" placeholder="팀원의 Github ID를 입력하세요." />
      <S.Input type="text" placeholder="팀원의 직무를 입력하세요." />
      <Button />
    </S.InputContainer>
  ),
  '이미지 삽입': (
    <S.InputContainer>
      <S.Input type="text" placeholder="width를 입력하세요. (% 가능)" />
      <S.Input type="text" placeholder="height를 입력하세요. (% 가능)" />
      <Button />
    </S.InputContainer>
  ),
  '프로젝트 기간': (
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
      {/* <S.InputBox>{ITEM_SCRIPT[type]}</S.InputBox> */}
      {ITEM_SCRIPT[type]}
      {isBottom && (
        <S.BottomWrapper>
          {/* <UploadItem></UploadItem> <UploadItem></UploadItem> */}
        </S.BottomWrapper>
      )}
    </div>
  );
};

export default ProjectInputItem;
