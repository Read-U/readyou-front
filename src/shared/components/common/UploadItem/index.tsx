import * as S from './style';

interface UploadItemProps {
  text?: string;
  onClick?: () => void;
}

const UploadItem = ({ text, onClick }: UploadItemProps) => {
  return (
    <S.Container>
      <S.Box>
        <S.Text>{text}</S.Text>
        <S.ButtonWrapper onClick={onClick}>
          <img src="/assets/icons/deleteButton.svg" alt="delete" />
        </S.ButtonWrapper>
      </S.Box>
    </S.Container>
  );
};

export default UploadItem;
