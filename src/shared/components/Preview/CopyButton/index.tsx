import React, { useEffect, useState } from 'react';
import 'github-markdown-css';
import { useRecoilValue } from 'recoil';
import { projectItems } from '@/recoil/states';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import useToast from '@/shared/hooks/useToast';
import Button from '../../common/Button';
import { DefaultItemProps } from '@/shared/types/markdown';
import * as S from './style';

const CopyButton = () => {
  const markdown = useRecoilValue(projectItems);

  const [isWork, SetIsWork] = useState(false);

  useEffect(() => {
    let text = markdown
      .map((v: DefaultItemProps) => v.detail)
      .join('\n')
      .replace(/#+\s+/gm, '')
      .trim();
    if (!text.length) {
      SetIsWork(false);
    } else SetIsWork(true);
    // console.log(text);
  }, [markdown]);

  const toast = useToast();

  return isWork ? (
    <CopyToClipboard
      text={markdown.map((v: DefaultItemProps) => v.detail).join('\n')}
      onCopy={() =>
        toast({
          message: '전체 복사되었어요!',
          status: 'info',
        })
      }
    >
      <Button type="copy">전체 복사</Button>
    </CopyToClipboard>
  ) : (
    <S.DisabledCopyButton type="back">전체 복사</S.DisabledCopyButton>
  );
};

export default CopyButton;
