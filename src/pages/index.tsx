import SampleImage from '/public/images/sample-image.png';
import * as S from './style';

export default function Home() {
  return (
    <S.Container>
      <S.TitleContainer>
        <S.Tittle>
          <S.BlueText>READ YOU</S.BlueText>로 10분 안에 <br />
          <S.BlueText>READ ME</S.BlueText>를 작성해봐!
        </S.Tittle>
        <S.SubTitle>
          마크다운 문법을 잘 몰라서, 귀찮아서, 시간이 오래 걸려서... 여러
          이유들로 쓰기 어려웠던 READ ME,
          <br />
          내용만 기입하면 자동으로 써주는 <S.BlueText>READ YOU</S.BlueText>를
          사용해 시간을 단축하세요.
        </S.SubTitle>
        <S.Button>리드유 작성하기!</S.Button>
      </S.TitleContainer>
      <S.StyledImage
        src={SampleImage}
        alt="sample"
        width={0}
        height={0}
        sizes="100vw"
      ></S.StyledImage>
    </S.Container>
  );
}
