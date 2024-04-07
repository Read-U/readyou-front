import { ChangeEvent, MouseEvent, useEffect, useState } from 'react';
import * as S from './style';
import TECH_STACK_DATA from '@/shared/constants/techStackData';
import UploadItem from '../common/UploadItem';
import Button from '../common/Button';

interface InputProps {
  type: string;
  placeholder: string;
}

const TechStackInput = ({ type, placeholder }: InputProps) => {
  const [value, setValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [matchList, setMatchList] = useState<string[]>([]);
  const [uploadList, setUploadList] = useState<string[]>([]);

  const handleInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setValue(value);
  };

  const handleUploadItemDelete = (index: number) => {
    const newUploadItem = uploadList.filter((_, i) => i !== index);
    setUploadList(newUploadItem);
  };

  // 연관 데이터 클릭
  const handleMatchItemClick = (e: MouseEvent) => {
    const { textContent } = e.target as HTMLLIElement;
    if (textContent) {
      setUploadList((prevList: string[]) => [...prevList, textContent!]);
      setIsOpen(false);
      setValue('');
    }
  };

  // 연관 데이터 필터
  useEffect(() => {
    const matchDataList = value
      ? Object.keys(TECH_STACK_DATA).filter((target) =>
          target.includes(value.toLowerCase()),
        )
      : [];
    setMatchList(matchDataList);
    setIsOpen(true);
  }, [value]);

  return (
    <>
      <S.RelativeBox>
        <S.Input
          value={value}
          onChange={handleInputValue}
          type={type}
          placeholder={placeholder}
        />
        <Button />
        {isOpen && (
          <S.MatchList>
            {matchList?.map((list, idx) => (
              <S.MatchItem key={idx} onClick={handleMatchItemClick}>
                {list}
              </S.MatchItem>
            ))}
          </S.MatchList>
        )}
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

export default TechStackInput;
