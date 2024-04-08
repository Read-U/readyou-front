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

  useEffect(() => {
    const newMarkdown = markdown.map((item: ItemProps) => {
      if (item.name === 'period' && item.detail) {
        const dateRegex = /\b\d{4}.\d{2}.\d{2}\b/g;
        const dates = item.detail.match(dateRegex);
        if (dates !== null) setDuration({ start: dates[0], end: dates[1] });
      }
    });
  }, []);

  const handleChangeDuration = (
    e: ChangeEvent<HTMLInputElement>,
    type: DURATION_TYPE,
  ) => {
    const date = e.target.value.split('-');
    const newFormDate = `${date[0]}.${date[1]}.${date[2]}`;
    if (type === 'start') {
      setDuration({ start: newFormDate, end: duration.end });
    }
    if (type === 'end') {
      setDuration({ start: duration.start, end: newFormDate });
    }
  };

  useEffect(() => {
    console.log(duration);
    const newMarkdown = markdown.map((item: ItemProps) => {
      if (item.name === 'period') {
        return {
          ...item,
          detail: `## 프로젝트 기간: ${duration.start} ~ ${duration.end}`,
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
          value={duration.start && duration.start.split('.').join('-')}
        />
        <img src="/assets/icons/range.svg" />
        <S.Input
          type="date"
          placeholder="완료한 날짜를 입력하세요. ex) 2***.**.**"
          onChange={(e) => handleChangeDuration(e, DURATION.END)}
          value={duration.end && duration.end.split('.').join('-')}
        />
      </S.InputContainer>
    </S.InputBox>
  );
};

export default ProjectDuration;
