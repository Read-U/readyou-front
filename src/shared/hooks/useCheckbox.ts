import { useState } from 'react';
import { DefaultItemProps } from '@/shared/types/markdown';

const useCheckbox = (initialCheckeds: DefaultItemProps[]) => {
  const [checkedList, setCheckedList] =
    useState<DefaultItemProps[]>(initialCheckeds);
  const handleCheckedElement = (markdownItem: DefaultItemProps) => {
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
