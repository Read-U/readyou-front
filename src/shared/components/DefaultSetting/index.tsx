import * as S from './style';
import Checkbox from '@/shared/components/common/Checkbox';
import useCheckbox from '@/shared/hooks/useCheckbox';
import Badge from '@/shared/components/common/Badge';
import {
  DEFAULT_CHECKED_ITEM,
  DEFAULT_ITEM_LIST,
} from '@/shared/constants/editor';
import { useRecoilState } from 'recoil';
import { stepState } from '@/recoil/states';
import Button from '../common/Button';

interface DefaultSettingProps {
  handleNextStep: () => void;
}

const DefaultSetting = () => {
  const { checkedList, handleCheckedElement } =
    useCheckbox(DEFAULT_CHECKED_ITEM);
  const [step, setStep] = useRecoilState(stepState);

  return (
    <S.MarkdownTemplateList>
      <S.TemplateHeader>
        <div>
          <S.Info>원하는 항목들만 골라 자신만의 README를 쓸 수 있어요!</S.Info>
          <S.Info>
            전부 선택했다면 옆에
            <S.HightlightText> 설정 </S.HightlightText>
            버튼을 눌러주세요.
          </S.Info>
        </div>
        <Button type="complete" onClick={() => setStep(step + 1)}>
          완료
        </Button>
      </S.TemplateHeader>
      {DEFAULT_ITEM_LIST.map((markdownItem, index) => (
        <S.MarkdownTemplateItem
          key={markdownItem.id}
          type={index === 0 ? 'required' : 'optional'}
          checked={checkedList.some((item) => item.id === markdownItem.id)}
          onClick={() => {
            if (index !== 0) {
              handleCheckedElement(markdownItem);
            }
          }}
        >
          {index === 0 ? (
            <S.EmptyBox />
          ) : (
            <Checkbox
              key={markdownItem.id}
              checked={checkedList.some((item) => item.id === markdownItem.id)}
            />
          )}
          <Badge isRequired={index === 0} />
          <S.Title>{markdownItem.type}</S.Title>
        </S.MarkdownTemplateItem>
      ))}
    </S.MarkdownTemplateList>
  );
};

export default DefaultSetting;
