import { ChangeEvent, useState } from 'react';
import * as S from './style';
import UploadItem from '../common/UploadItem';
import Button from '../common/Button';
import useToast from '@/shared/hooks/useToast';
import { useRecoilState } from 'recoil';
import { projectItems } from '@/recoil/states';

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

interface InputProps extends React.HTMLProps<HTMLInputElement> {}
interface UploadListType {
  link: string;
  markdown: string;
}

const regex = /\/vi\/([A-Za-z0-9_-]{11})\//;

const UploadVideoInput = ({ type, placeholder }: InputProps) => {
  const [value, setValue] = useState('');
  const [uploadList, setUploadList] = useState<UploadListType[]>([]);
  const [markdown, setMarkdown] = useRecoilState(projectItems);
  const toast = useToast();
  let isData;

  const handleInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setValue(value);
  };

  // 항목 삭제
  const handleUploadItemDelete = (index: number, link: string) => {
    const newMarkdown = markdown.map((item) => {
      if (item.name === 'video' && item.detail) {
        const newData = item.detail.replace(link, '');
        return { ...item, detail: newData };
      }
      return item;
    });
    setMarkdown(newMarkdown);
    const newUploadItem = uploadList.filter((_, i) => i !== index);
    setUploadList(newUploadItem);
  };

  const validationLink = async (link: string) => {
    try {
      const res = await fetch(`${BASE_URL}/api/youtube?link=${link}`);
      if (!res.ok) {
        throw new Error('유효하지 않은 링크입니다!');
      }
      const result = await res.json();
      return result.videoId;
    } catch (error) {
      toast({
        message: '유효하지 않는 링크입니다!',
        status: 'error',
      });
      setValue('');
      return;
    }
  };

  // 항목 추가
  const handleUploadItemAdd = async () => {
    if (!value) {
      toast({
        message: '링크를 입력해 주세요!',
        status: 'error',
      });
      return;
    }
    const validationResult = await validationLink(value);
    if (!validationResult) {
      return;
    }
    const newMarkdown = markdown.map((item) => {
      if (item.name === 'video') {
        return {
          ...item,
          detail:
            item.detail +
            `\n[![영상 썸네일 이미지](http://img.youtube.com/vi/${validationResult}/0.jpg)](https://youtu.be/${validationResult})\n`,
        };
      }
      return item;
    });

    setMarkdown(newMarkdown);
    setUploadList((prevList) => [
      ...prevList,
      { link: value, markdown: validationResult },
    ]);
    setValue('');
  };

  function checkEmptyString(str) {
    return str.trim().length !== 0;
  }

  markdown.forEach((item) => {
    const check = checkEmptyString(item.detail);
    if (item.name === 'video' && item.detail && check) {
      isData = true;
    }
  });
  // console.log(markdown);
  // console.log(isData);
  return (
    <>
      <S.RelativeBox>
        <S.Input
          value={value}
          onChange={handleInputValue}
          type={type}
          placeholder={placeholder}
        />
        <Button onClick={handleUploadItemAdd}>추가</Button>
      </S.RelativeBox>
      {isData && (
        <S.BottomWrapper>
          {markdown.map((item) => {
            if (item.name === 'video' && item.detail) {
              const arr = item.detail.split('\n');
              arr.pop();
              return arr?.map((list, idx) => {
                const match = list.match(regex);
                if (match) {
                  return (
                    <UploadItem
                      onClick={() => handleUploadItemDelete(idx, list)}
                      key={idx}
                      text={`https://www.youtube.com/watch?v=${match[1]}`}
                    />
                  );
                }
              });
            }
          })}
        </S.BottomWrapper>
      )}
    </>
  );
};

export default UploadVideoInput;
