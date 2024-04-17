import { useState, useEffect, ChangeEvent } from 'react';
import Button from '../common/Button';
import ProjectInputItem from '../common/ProjectInputItem';
import * as S from './style';
import { useRecoilState } from 'recoil';
import { markdown, stepState } from '@/recoil/states';
import { DisabledCopyButton } from '../Preview/CopyButton/style';
import Swal from 'sweetalert2';

const RawCode = () => {
  const [step, setStep] = useRecoilState(stepState);
  const [markdownText, setMarkdown] = useRecoilState(markdown);

  const handleMarkdownChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMarkdown(e.target.value);
  };

  const handleConfirm = () => {
    Swal.fire({
      title: '뒤로가기',
      text: '코드가 초기화됩니다!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '확인!',
      cancelButtonText: '취소!',
    }).then((result) => {
      if (result.isConfirmed) {
        setStep(step - 1);
      }
    });
  };

  return (
    <S.Inner>
      <DisabledCopyButton type="back" onClick={handleConfirm}>
        뒤로가기
      </DisabledCopyButton>
      <S.TextContainer>
        <S.TextArea
          spellCheck="false"
          onChange={handleMarkdownChange}
          value={markdownText}
        />
      </S.TextContainer>
    </S.Inner>
  );
};

export default RawCode;
