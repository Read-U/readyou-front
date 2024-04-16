import { ChangeEvent, useEffect, useState } from 'react';
import * as S from './style';
import UploadItem from '../common/UploadItem';
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { projectItems } from '@/recoil/states';

const ImageCreateInput = () => {
  const [width, setWidth] = useState<string>('');
  const [height, setHeight] = useState<string>('');

  const [imageNameList, setImageNameList] = useState<string[]>([]); // upload된 이미지 파일명

  const [markdown, setMarkdown] = useRecoilState(projectItems);

  /** sessionStorage에 이미 존재하는 경우 setting */
  useEffect(() => {
    markdown.map((item) => {
      if (item.name === 'image') {
        if (item.imageNameList) return setImageNameList(item.imageNameList);
      }
    });
  }, []);

  /** 이미지 -> 링크 변환 API */
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;

    if (files && files.length > 0) {
      const formData = new FormData();
      formData.append('image', files[0]);

      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        // url: `${process.env.NEXT_PUBLIC_API_URL}/api/img`,
        url: `https://readyou.shop/api/img`,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        data: formData,
      };

      axios
        .request(config)
        .then((response) => {
          const imageLink = response.data.imageLink;
          const newMarkdown = markdown.map((item) => {
            if (item.name === 'image') {
              if (item.imageNameList) {
                return {
                  ...item,
                  detail:
                    item.detail +
                    `<br><img src="${imageLink}" width="${width}" height="${height}" /><br>\n`,
                  imageNameList: [...item.imageNameList, files[0].name],
                };
              }
            }
            return item;
          });

          setMarkdown(newMarkdown);

          /** 초기화 */
          setWidth('');
          setHeight('');
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
      handleFileChange(event);
      setImageNameList((prevImageNameList) => [...prevImageNameList, fileName]);
    }
  };

  /** 이미지 삭제 */
  const handleItemDelete = (index: number) => {
    const newMarkdown = markdown.map((item) => {
      if (item.name === 'image' && item.detail && item.imageNameList) {
        const arr =
          item.detail.replace(/<br>/g, '').match(/<img[^>]+>/g) || [];
        const newArr = arr.filter((_, i) => i !== index);
        const newDetail = newArr.join('<br>');
        const newImageNameList = item.imageNameList.filter(
          (_, i) => i !== index,
        );
        return {
          ...item,
          detail: `<br>${newDetail}<br>`,
          imageNameList: newImageNameList,
        };
      }
      return item;
    });

    setMarkdown(newMarkdown);
    const newImageNameList = imageNameList.filter((_, i) => i !== index);
    setImageNameList(newImageNameList);
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
          accept=".png, .jpg, .jpeg, .gif, .svg"
        />
      </S.RelativeBox>
      {imageNameList.length > 0 && (
        <S.BottomWrapper>
          {imageNameList.map((imageName, index) => (
            <UploadItem
              key={imageName}
              text={imageName}
              onClick={() => handleItemDelete(index)}
            />
          ))}
        </S.BottomWrapper>
      )}
    </>
  );
};

export default ImageCreateInput;
