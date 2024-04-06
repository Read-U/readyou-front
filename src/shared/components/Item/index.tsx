import Input from '../Input';
import Button from '../button';
import * as S from './style';
const TrashIcon = '/icons/trash.svg';

const ITEM_SCRIPT: { [key: string]: JSX.Element } = {
  '프로젝트 제목': (
    <Input
      labelText="프로젝트 제목"
      type="text"
      placeholder="프로젝트 제목을 기입해 주세요."
      width={780}
    />
  ),
  '프로젝트 설명': (
    <Input
      labelText="프로젝트 설명"
      type="text"
      placeholder="프로젝트 설명을 기입해 주세요."
      width={780}
    />
  ),
  '프로젝트 기간': (
    <>
      <Input
        labelText="프로젝트 시작 기간"
        type="date"
        placeholder="시작한 날짜를 입력하세요."
        width={388}
      />
      <Input
        labelText="프로젝트 종료 기간"
        type="date"
        placeholder="종료한 날짜를 입력하세요."
        width={388}
      />
    </>
  ),
  '이미지 삽입': (
    <>
      <Input
        labelText="이미지 높이"
        type="number"
        placeholder="높이를 입력해 주세요"
        width={344}
      />
      <Input
        labelText="이미지 넓이"
        type="number"
        placeholder="넓이를 입력해 주세요"
        width={344}
      />
      <Button type="button" width={68} color="#648FFF" bgColor="#E0E9FF">
        추가
      </Button>
    </>
  ),
};

function Item({ action }: { action: string }) {
  return (
    <>
      <S.TitleBox>
        <S.Title>{action}</S.Title>
        <S.TrashIcon src={TrashIcon} alt="휴지통 아이콘" />
      </S.TitleBox>
      <S.InputBox>{ITEM_SCRIPT[action]}</S.InputBox>
    </>
  );
}

export default Item;
