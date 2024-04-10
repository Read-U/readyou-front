import {
  ChangeEvent,
  KeyboardEvent,
  MouseEvent,
  useEffect,
  useState,
} from 'react';
import { renderToString } from 'react-dom/server';
import * as S from './style';
import TECH_STACK_DATA from '@/shared/constants/techStackData';
import UploadItem from '../common/UploadItem';
import { useRecoilState } from 'recoil';
import { projectItems } from '@/recoil/states';
import useToast from '@/shared/hooks/useToast';

interface InputProps extends React.HTMLProps<HTMLInputElement> {}

interface TMatchList {
  text: string;
  index: number;
  isOver: boolean;
}
let nowIndex = -1;
const TechStackInput = ({ type, placeholder }: InputProps) => {
  const [value, setValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [matchList, setMatchList] = useState<TMatchList[]>([
    {
      text: '',
      index: 0,
      isOver: false,
    },
  ]);
  const [uploadList, setUploadList] = useState<string[]>([]);
  const [markdown, setMarkdown] = useRecoilState(projectItems);
  const toast = useToast();

  const handleAreaClick = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    document.addEventListener('click', handleAreaClick);

    return () => document.removeEventListener('click', handleAreaClick);
  }, []);

  const handleInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setValue(value);
    setIsOpen(true);
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    const matchDataList = value
      ? Object.keys(TECH_STACK_DATA).filter((target) =>
          target.startsWith(value.toLowerCase()),
        )
      : [];

    switch (e.keyCode) {
      // UP KEY
      case 38:
        nowIndex = Math.max(nowIndex - 1, 0);
        break;

      // DOWN KEY
      case 40:
        nowIndex = Math.min(nowIndex + 1, matchDataList.length - 1);
        break;

      // ENTER KEY
      case 13:
        // nowIndex가 있을 때
        if (nowIndex > -1) {
          addMarkdown(matchDataList[nowIndex]);
          setIsOpen(false);
          setValue('');
          break;
        }
        // 유저 인풋 휴먼에러 체크
        if (Object.keys(TECH_STACK_DATA).includes(value.toLowerCase())) {
          addMarkdown(value.toLowerCase());
          setUploadList((prevList: string[]) => [
            ...prevList,
            value.toLowerCase(),
          ]);
          setIsOpen(false);
          setValue('');
          break;
        }
        // 휴면 에러가 있을 경우
        toast({
          message: '존재하지 않는 기술스택입니다!',
          status: 'error',
        });
        break;

      // 그외 입력은 초기화
      default:
        nowIndex = -1;
        break;
    }

    const newMacthList = matchDataList.slice(0, 4).map((data, index) => {
      if (index === nowIndex) {
        return { text: data, index, isOver: true };
      }
      return { text: data, index, isOver: false };
    });
    setMatchList(newMacthList);
  };

  const handleUploadItemDelete = (index: number, text: string) => {
    const newMarkdown = markdown.map((item) => {
      if (item.name === 'techStack' && item.detail) {
        const newData = item.detail.replace(text, '');
        return { ...item, detail: newData };
      }
      return item;
    });
    setMarkdown(newMarkdown);
    const newUploadItem = uploadList.filter((_, i) => i !== index);
    setUploadList(newUploadItem);
  };

  const addMarkdown = (target: string) => {
    const newMarkdown = markdown.map((item) => {
      if (item.name === 'techStack') {
        return {
          ...item,
          detail: item.detail + renderToString(TECH_STACK_DATA[target]),
        };
      }
      return item;
    });
    setMarkdown(newMarkdown);
  };

  // 연관 데이터 클릭
  const handleMatchItemClick = (e: MouseEvent) => {
    const { textContent } = e.target as HTMLLIElement;
    if (textContent) {
      addMarkdown(textContent);
      setUploadList((prevList: string[]) => [...prevList, textContent!]);
      setIsOpen(false);
      setValue('');
    }
  };

  // 연관 데이터 필터
  // useEffect(() => {
  //   const matchDataList = value
  //     ? Object.keys(TECH_STACK_DATA).filter((target) =>
  //         target.startsWith(value.toLowerCase()),
  //       )
  //     : [];

  //   const newMacthList = matchDataList.slice(0, 4).map((data, index) => {
  //     return { text: data, index, isOver: false };
  //   });
  //   setMatchList(newMacthList);
  // }, [value]);

  return (
    <>
      <S.Wrap>
        <S.ReletiveBox>
          <S.Input
            value={value}
            onChange={handleInputValue}
            type={type}
            placeholder={placeholder}
            onKeyUp={handleKeyPress}
          />
          {isOpen && (
            <S.MatchList>
              {matchList?.map((list, idx) => (
                <S.MatchItem
                  key={idx}
                  onClick={handleMatchItemClick}
                  $isOver={list.isOver}
                >
                  {list.text}
                </S.MatchItem>
              ))}
            </S.MatchList>
          )}
        </S.ReletiveBox>
      </S.Wrap>
      <S.BottomWrapper>
        {markdown.map((item) => {
          if (item.name === 'techStack' && item.detail) {
            const slice = item.detail.split('/>');
            slice.pop();
            return slice?.map((list, idx) => {
              const element = list + '/>';
              const match = element.match(/logo=([^&]+)/);
              if (match) {
                return (
                  <UploadItem
                    onClick={() => handleUploadItemDelete(idx, element)}
                    key={idx}
                    text={match[1]}
                  />
                );
              }
            });
          }
        })}
      </S.BottomWrapper>
    </>
  );
};

export default TechStackInput;
