import * as S from './style';

const DeleteIcon = '/icons/delete.svg';

function AdditionalItem({ text }: { text: string }) {
  return (
    <S.AdditionalItem>
      <S.AdditionalText>{text}</S.AdditionalText>
      <S.DeleteIconBackGround>
        <S.DeleteIcon src={DeleteIcon} alt="삭제 X 아이콘" />
      </S.DeleteIconBackGround>
    </S.AdditionalItem>
  );
}

export default AdditionalItem;
