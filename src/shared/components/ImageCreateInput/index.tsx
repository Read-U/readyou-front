import { ChangeEvent, useEffect, useState } from 'react';
import * as S from './style';
import UploadItem from '../common/UploadItem';
import axios from 'axios';

const ImageCreateInput = () => {
  const [imageNameList, setImageNameList] = useState<string[]>([]);
  const [ImageLinkList, setImageLinkList] = useState<string[]>([]);

  /** test */
  useEffect(() => {
    console.log(ImageLinkList);
  }, [ImageLinkList]);

  /** 이미지 -> 링크 변환 API */
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;

    if (files && files.length > 0) {
      const formData = new FormData();
      formData.append('image', files[0]);

      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: `${process.env.NEXT_PUBLIC_API_URL}/api/img`,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        data: formData,
      };

      axios
        .request(config)
        .then((response) => {
          const imageLink = response.data.imageLink;
          setImageLinkList((prevImageLinkList) => [
            ...prevImageLinkList,
            imageLink,
          ]);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const handleAddImage = (event: ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
    if (files && files.length > 0) {
      const fileName = files[0].name;

      /** 이미지 파일 유효성 검사 */
      const extension = fileName.split('.').pop();
      if (!extension || !['jpg', 'png', 'jpeg'].includes(extension))
        return alert('이미지 타입이 아닙니다.');

      handleFileChange(event);

      setImageNameList((prevImageNameList) => [...prevImageNameList, fileName]);
    }
  };

  const handleItemDelete = (index: number) => {
    return () => {
      const newList = imageNameList.filter((_, i) => i !== index);
      setImageNameList(newList);
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
          onChange={handleAddImage}
        />
      </S.RelativeBox>
      {imageNameList.length > 0 && (
        <S.BottomWrapper>
          {imageNameList.map((list, index) => (
            <UploadItem
              key={index}
              text={list}
              onClick={handleItemDelete(index)}
            />
          ))}
        </S.BottomWrapper>
      )}
    </>
  );
};

export default ImageCreateInput;
