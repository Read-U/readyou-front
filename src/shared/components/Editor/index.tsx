import { useState, useEffect } from 'react';
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from 'react-beautiful-dnd';
import Button from '../common/Button';
import ProjectInputItem from '../common/ProjectInputItem';
import * as S from './style';
import { useRecoilState } from 'recoil';
import { markdownState, stepState } from '@/recoil/states';

const Editor = () => {
  const [markdown, setMarkdown] = useRecoilState(markdownState);
  const [enabled, setEnabled] = useState(false);
  const [itemList, setItemList] = useState(markdown);
  const [step, setStep] = useRecoilState(stepState);
  useEffect(() => {
    const animation = requestAnimationFrame(() => setEnabled(true));

    return () => {
      cancelAnimationFrame(animation);
      setEnabled(false);
    };
  }, []);

  if (!enabled) {
    return null;
  }

  const onDragEnd = ({ source, destination }: DropResult) => {
    if (!destination) return;

    const _items = JSON.parse(JSON.stringify(itemList));
    const targetItem = _items.splice(source.index, 1); // 타겟을 빼서
    _items.splice(destination.index, 0, targetItem[0]); // 이동하는 곳 뒤에 추가

    markdown.map((markdownItem) => {
      const itemIndex = _items.findIndex(
        (item: any) => item.name === markdownItem.name,
      );
      if (itemIndex !== -1) {
        _items[itemIndex].detail = markdownItem.detail;
      }
    });

    setItemList(_items);
    setMarkdown(_items);
  };

  const handleItemDelete = (type: string) => {
    const filterResult = itemList.filter((list) => list.type !== type);
    setItemList(filterResult);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <S.Inner>
        <Button type="back" onClick={() => setStep(step - 1)}>
          뒤로가기
        </Button>
        <Droppable droppableId="editor">
          {(provided) => (
            <S.ItemContainer
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {itemList.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.dragHandleProps}
                      {...provided.draggableProps}
                    >
                      <ProjectInputItem
                        handleItemDelete={handleItemDelete}
                        type={item.type}
                      />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </S.ItemContainer>
          )}
        </Droppable>
      </S.Inner>
    </DragDropContext>
  );
};

export default Editor;
