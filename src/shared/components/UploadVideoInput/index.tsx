import { ChangeEvent, useState } from 'react';
import * as S from './style';
import UploadItem from '../common/UploadItem';
import Button from '../common/Button';
import useToast from '@/shared/hooks/useToast';
const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

interface InputProps extends React.HTMLProps<HTMLInputElement> {}

const UploadVideoInput = ({ type, placeholder }: InputProps) => {
  const [value, setValue] = useState('');
  const [uploadList, setUploadList] = useState<string[]>([]);
  const toast = useToast();

  const handleInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setValue(value);
  };

  const handleUploadItemDelete = (index: number) => {
    const newUploadItem = uploadList.filter((_, i) => i !== index);
    setUploadList(newUploadItem);
  };

  const validationLink = async (link: string): Promise<[boolean, unknown]> => {
    try {
      const res = await fetch(`${BASE_URL}/api/youtube?link=${link}`);
      if (!res.ok) {
        throw new Error('유효하지 않은 링크입니다!');
      }
      return [true, res.json()];
    } catch (error) {
      return [false, error];
    }
  };

  const handleUploadItemAdd = async () => {
    const validationResult = await validationLink(value);
    if (!validationResult[0]) {
      toast({
        message: '유효하지 않는 링크입니다!',
        status: 'error',
      });
      setValue('');
      return;
    }
    const linkMarkdown = validationResult[1];
    setUploadList((prevList) => [...prevList, value]);
    setValue('');
  };

  return (
    <>
      <S.RelativeBox>
        <S.Input
          value={value}
          onChange={handleInputValue}
          type={type}
          placeholder={placeholder}
        />
        <Button onClick={handleUploadItemAdd} />
      </S.RelativeBox>
      {uploadList.length !== 0 && (
        <S.BottomWrapper>
          {uploadList?.map((list, idx) => (
            <UploadItem
              onClick={() => handleUploadItemDelete(idx)}
              key={idx}
              text={list}
            />
          ))}
        </S.BottomWrapper>
      )}
    </>
  );
};

export default UploadVideoInput;
