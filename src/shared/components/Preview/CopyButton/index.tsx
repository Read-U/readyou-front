import React, { useEffect, useState } from 'react';
import * as S from './style';
import 'github-markdown-css';
import { useRecoilValue } from 'recoil';
import { markdownState } from '@/recoil/states';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import useToast from '@/shared/hooks/useToast';
const CopyButton = () => {
  const markdown = useRecoilValue(markdownState);
  const toast = useToast();

  return (
    <CopyToClipboard
      text={markdown}
      onCopy={() =>
        toast({
          message: '전체 복사되었어요!',
          status: 'info',
        })
      }
    >
      <S.CopyButton>전체 복사</S.CopyButton>
    </CopyToClipboard>
  );
};

export default CopyButton;
