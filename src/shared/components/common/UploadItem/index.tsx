import * as S from './style';

const UploadItem = ({ text }: { text?: string }) => {
  return (
    <S.Container>
      <S.Box>
        <S.Text>react</S.Text>
        <S.ButtonWrapper>
          <img src="/assets/icons/deleteButton.svg" />
        </S.ButtonWrapper>
      </S.Box>
    </S.Container>
  );
};

export default UploadItem;
