import { ChangeEvent } from 'react';
import * as S from './style';

const DURATION = {
  START: 'start',
  END: 'end',
} as const;

type DURATION_TYPE = (typeof DURATION)[keyof typeof DURATION];

const ProjectDuration = () => {
  const handleChangeDuration = (
    e: ChangeEvent<HTMLInputElement>,
    type: DURATION_TYPE,
  ) => {
    // TODO : 프로젝트 기간 마크다운 디자인 정하기, 전역 상태랑 연결
  };

  return (
    <S.InputBox>
      <S.InputContainer>
        <S.Input
          type="date"
          placeholder="시작한 날짜를 입력하세요. ex) 2***.**.**"
          onChange={(e) => handleChangeDuration(e, DURATION.START)}
        />
        <img src="/assets/icons/range.svg" />
        <S.Input
          type="date"
          placeholder="완료한 날짜를 입력하세요. ex) 2***.**.**"
          onChange={(e) => handleChangeDuration(e, DURATION.END)}
        />
      </S.InputContainer>
    </S.InputBox>
  );
};

export default ProjectDuration;
