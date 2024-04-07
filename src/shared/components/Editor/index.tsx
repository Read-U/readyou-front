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
import { defaultSettings, stepState } from '@/recoil/states';

const Editor = () => {
  const [enabled, setEnabled] = useState(false);
  const [itemList, setItemList] = useRecoilState(defaultSettings);
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

    setItemList(_items);
  };

  console.log(itemList);

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <S.Inner>
        <Button type="back" onClick={() => setStep(step - 1)} />
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
                      <ProjectInputItem type={item.type} />
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
