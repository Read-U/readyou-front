import { ChangeEvent, useState } from 'react';
import * as S from './style';
import UploadItem from '../common/UploadItem';
import Button from '../common/Button';
import useToast from '@/shared/hooks/useToast';

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

  const handleUploadItemAdd = async () => {
    /* 
    백 api 요청 후 에러가 나오면 토스트 사용 예정
    toast({
      message: '유효하지 않는 링크입니다!',
      status: 'error',
    });
    */
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
