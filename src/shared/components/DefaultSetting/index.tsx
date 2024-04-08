import * as S from './style';
import Checkbox from '@/shared/components/common/Checkbox';
import Badge from '@/shared/components/common/Badge';
import { DEFAULT_ITEM_LIST } from '@/shared/constants/editor';
import { useRecoilState } from 'recoil';
import { projectItems, stepState } from '@/recoil/states';
import Button from '../common/Button';
import { ItemProps } from '@/shared/types/markdown';

const DefaultSetting = () => {
  const [itemList, setItemList] = useRecoilState(projectItems);
  const [step, setStep] = useRecoilState(stepState);
  console.log(itemList, 'itemList');

  const handleCheckedElement = (markdownItem: ItemProps) => {
    const isAlreadyChecked = itemList.some(
      (item) => item.id === markdownItem.id,
    );

    if (isAlreadyChecked) {
      const updatedList = itemList.filter(
        (item) => item.id !== markdownItem.id,
      );

      setItemList(updatedList);
    } else {
      setItemList([...itemList, markdownItem]);
    }
  };

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
          checked={itemList.some((item) => item.id === markdownItem.id)}
        >
          {index === 0 ? (
            <S.EmptyBox />
          ) : (
            <Checkbox
              key={markdownItem.id}
              checked={itemList.some((item) => item.id === markdownItem.id)}
              onChange={() => {
                if (index !== 0) {
                  handleCheckedElement(markdownItem);
                }
              }}
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
