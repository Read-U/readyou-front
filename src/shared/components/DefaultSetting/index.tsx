import * as S from './style';
import Checkbox from '@/shared/components/common/Checkbox';
import useCheckbox from '@/shared/hooks/useCheckbox';
import Badge from '@/shared/components/common/Badge';
import {
  DEFAULT_CHECKED_ITEM,
  DEFAULT_ITEM_LIST,
} from '@/shared/constants/editor';

const DefaultSetting = () => {
  const { checkedList, handleCheckedElement } =
    useCheckbox(DEFAULT_CHECKED_ITEM);

  return (
    <S.MarkdownTemplateList>
      {DEFAULT_ITEM_LIST.map((markdownItem) => (
        <S.MarkdownTemplateItem
          key={markdownItem.id}
          type={markdownItem.type}
          checked={checkedList.some((item) => item.id === markdownItem.id)}
          onClick={() => {
            if (markdownItem.type !== 'required') {
              handleCheckedElement(markdownItem);
            }
          }}
        >
          {markdownItem.type === 'required' ? (
            <S.EmptyBox />
          ) : (
            <Checkbox
              key={markdownItem.id}
              defaultChecked={checkedList.some(
                (item) => item.id === markdownItem.id,
              )}
            />
          )}
          <Badge type={markdownItem.type} />
          <S.Title>{markdownItem.name}</S.Title>
        </S.MarkdownTemplateItem>
      ))}
    </S.MarkdownTemplateList>
  );
};

export default DefaultSetting;
