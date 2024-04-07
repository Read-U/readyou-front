import { ChangeEvent, useEffect, useState } from 'react';
import * as S from './style';
import UploadItem from '../common/UploadItem';
import axios from 'axios';

const ImageCreateInput = () => {
  const [width, setWidth] = useState<string>('');
  const [height, setHeight] = useState<string>('');

  const [imageNameList, setImageNameList] = useState<string[]>([]);
  const [imageLinkList, setImageLinkList] = useState<string[]>([]);
  const [imageMarkdown, setImageMarkdown] = useState<string>('');

  useEffect(() => {
    const markdown = imageLinkList
      .map((link) => `<img src=${link} width="${width}" height="${height}" />`)
      .join('\n');

    console.log(markdown);
    setImageMarkdown(markdown);

    /** 초기화 */
    setWidth('');
    setHeight('');
  }, [imageLinkList]);

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

  /** 이미지 추가 */
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

  /** 이미지 삭제 */
  const handleItemDelete = (index: number) => {
    return () => {
      const newNameList = imageNameList.filter((_, i) => i !== index);
      setImageNameList(newNameList);

      const newLinkList = imageLinkList.filter((_, i) => i !== index);
      setImageLinkList(newLinkList);
    };
  };

  return (
    <>
      <S.RelativeBox>
        <S.Input
          type="text"
          value={width}
          onChange={(e) => setWidth(e.target.value)}
          placeholder="width를 입력하세요. (% 가능)"
        />
        <S.Input
          type="text"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          placeholder="height를 입력하세요. (% 가능)"
        />
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
