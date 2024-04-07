import React from 'react';
import 'github-markdown-css';
import { useRecoilValue } from 'recoil';
import { defaultSettings } from '@/recoil/states';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import useToast from '@/shared/hooks/useToast';
import Button from '../../common/Button';

const CopyButton = () => {
  const markdown = useRecoilValue(defaultSettings);
  const newData = markdown.map((v) => v.detail).join('\n');

  const toast = useToast();

  return (
    <CopyToClipboard
      text={newData}
      onCopy={() =>
        toast({
          message: '전체 복사되었어요!',
          status: 'info',
        })
      }
    >
      <Button type="copy">전체 복사</Button>
    </CopyToClipboard>
  );
};

export default CopyButton;
