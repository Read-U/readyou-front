import { ChangeEvent, useEffect, useState } from 'react';
import * as S from './style';
import { useRecoilState } from 'recoil';
import { projectItems } from '@/recoil/states';
import { ItemProps } from '@/shared/types/markdown';

const DURATION = {
  START: 'start',
  END: 'end',
} as const;

type DURATION_TYPE = (typeof DURATION)[keyof typeof DURATION];

interface DurationPair {
  start: string;
  end: string;
}

const ProjectDuration = () => {
  const [markdown, setMarkdown] = useRecoilState(projectItems);
  const [duration, setDuration] = useState<DurationPair>({
    start: '',
    end: '',
  });

  const handleChangeDuration = (
    e: ChangeEvent<HTMLInputElement>,
    type: DURATION_TYPE,
  ) => {
    const date = e.target.value.split('-');
    const newFormDate = `${date[0]}.${date[1]}.${date[2]}`;
    console.log('ss');
    if (type === 'start') {
      setDuration({ start: newFormDate, end: duration.end });
    }
    if (type === 'end') {
      setDuration({ start: duration.start, end: newFormDate });
    }
    console.log(duration);
  };

  useEffect(() => {
    console.log(duration);
    const newMarkdown = markdown.map((item: ItemProps) => {
      if (item.name === 'period') {
        return {
          ...item,
          detail: `<div align="center"> ${duration.start} ~ ${duration.end} </div>\n`,
        };
      }
      return item;
    });

    setMarkdown(newMarkdown);
  }, [duration]);

  return (
    <S.InputBox>
      <S.InputContainer>
        <S.Input
          type="date"
          placeholder="시작한 날짜를 입력하세요. ex) 2***.**.**"
          onChange={(e) => handleChangeDuration(e, DURATION.START)}
        />
        <img src="/assets/icons/range.svg" />
        <S.Input
          type="date"
          placeholder="완료한 날짜를 입력하세요. ex) 2***.**.**"
          onChange={(e) => handleChangeDuration(e, DURATION.END)}
        />
      </S.InputContainer>
    </S.InputBox>
  );
};

export default ProjectDuration;
