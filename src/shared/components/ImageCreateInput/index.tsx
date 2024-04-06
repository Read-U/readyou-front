import { ChangeEvent, useState } from 'react';
import * as S from './style';
import UploadItem from '../common/UploadItem';

const ImageCreateInput = () => {
  const [imageList, setImageList] = useState<string[]>([]);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
    if (files && files.length > 0) {
      const fileName = files[0].name;
      setImageList((prevImageList) => [...prevImageList, fileName]);
    }
  };

  const handleItemDelete = (index: number) => {
    return () => {
      const newList = imageList.filter((_, i) => i !== index);
      setImageList(newList);
    };
  };

  return (
    <>
      <S.RelativeBox>
        <S.Input type="text" placeholder="width를 입력하세요. (% 가능)" />
        <S.Input type="text" placeholder="height를 입력하세요. (% 가능)" />
        <S.FileButton htmlFor="input-file">추가</S.FileButton>
        <S.FileHiddenButton
          type="file"
          id="input-file"
          onChange={handleFileChange}
        />
      </S.RelativeBox>
      {imageList.length > 0 && (
        <S.BottomWrapper>
          {imageList.map((list, index) => (
            <UploadItem text={list} onClick={handleItemDelete(index)} />
          ))}
        </S.BottomWrapper>
      )}
    </>
  );
};

export default ImageCreateInput;
