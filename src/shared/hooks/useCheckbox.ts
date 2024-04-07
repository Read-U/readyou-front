import { useState } from 'react';
import { ItemProps } from '@/shared/types/markdown';
import { useRecoilState } from 'recoil';
import { projectItems } from '@/recoil/states';

const useCheckbox = (initialCheckeds: ItemProps[]) => {
  const [checkedList, setCheckedList] =
    useRecoilState<ItemProps[]>(projectItems);
  const handleCheckedElement = (markdownItem: ItemProps) => {
    const isAlreadyChecked = checkedList.some(
      (item) => item.id === markdownItem.id,
    );

    if (isAlreadyChecked) {
      const updatedList = checkedList.filter(
        (item) => item.id !== markdownItem.id,
      );
      setCheckedList(updatedList);
    } else {
      setCheckedList([...checkedList, markdownItem]);
    }
  };
  return { checkedList, handleCheckedElement };
};

export default useCheckbox;
