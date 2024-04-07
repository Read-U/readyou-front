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

const tempData = [
  // 체크 박스에서 넘어 올 mock 데이터
  { id: '1', type: '프로젝트 제목' },
  { id: '2', type: '이미지 삽입' },
  { id: '3', type: '프로젝트 기간' },
  { id: '4', type: '프로젝트 설명' },
  { id: '5', type: '팀원 테이블' },
  { id: '6', type: '기술 스택' },
  { id: '7', type: '동영상 삽입' },
];

const Editor = () => {
  const [enabled, setEnabled] = useState(false);
  const [itemList, setItemList] = useState(tempData);

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
      <S.Box>
        <S.Inner>
          <Button type="back" />
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
      </S.Box>
    </DragDropContext>
  );
};

export default Editor;
