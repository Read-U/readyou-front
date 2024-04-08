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
  const validateDate = (dateString: string) => {
    var regex = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/;
    return regex.test(dateString);
  };

  useEffect(() => {
    const newMarkdown = markdown.map((item: ItemProps) => {
      if (item.name === 'period' && item.detail) {
        let [startDate, endDate] = item.detail.split('~');
        console.log(item.detail, startDate, endDate);
        const dateRegex = /\b\d{4}.\d{2}.\d{2}\b/g;
        const start = startDate ? startDate.match(dateRegex) : '';
        const end = endDate ? endDate.match(dateRegex) : '';
        console.log(start, end);

        if (start && start[0] && end && end[0]) {
          setDuration({ start: start[0], end: end[0] });
          return;
        }
        if (start && start[0]) {
          setDuration({ start: start[0], end: '' });
          return;
        }
        if (end && end[0]) {
          setDuration({ start: '', end: end[0] });
          return;
        }
        setDuration({ start: '', end: '' });
      }
    });
  }, []);

  const handleChangeDuration = (
    e: ChangeEvent<HTMLInputElement>,
    type: DURATION_TYPE,
  ) => {
    if (!validateDate(e.target.value)) {
      if (type === 'start') {
        setDuration({ start: '', end: duration.end });
      }
      if (type === 'end') {
        setDuration({ start: duration.start, end: '' });
      }
      return;
    }

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
    const newMarkdown = markdown.map((item: ItemProps) => {
      if (item.name === 'period') {
        let script = `## 프로젝트 기간: ${duration.start} ~ ${duration.end}\n`;
        if (!duration.start && !duration.end) {
          script = `## 프로젝트 기간: \n`;
        }
        return {
          ...item,
          detail: script,
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
          value={duration.start ? duration.start.split('.').join('-') : ''}
        />
        <img src="/assets/icons/range.svg" />
        <S.Input
          type="date"
          placeholder="완료한 날짜를 입력하세요. ex) 2***.**.**"
          onChange={(e) => handleChangeDuration(e, DURATION.END)}
          value={duration.end ? duration.end.split('.').join('-') : ''}
        />
      </S.InputContainer>
    </S.InputBox>
  );
};

export default ProjectDuration;
