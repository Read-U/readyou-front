import Head from 'next/head';

interface MetaHeadProps {
  title?: string;
}

const MetaHead = ({ title }: MetaHeadProps) => {
  return (
    <Head>
      <title>{title || 'READ YOU'}</title>
      <meta name="title" content="READ YOU" />
      <meta name="keyword" content="README, READYOU, 간편함, 프로젝트" />
      <meta name="description" content="누구나 간편하게 README.md 작성하기" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      {/* Open Graph */}
      <meta property="og:title" content="READ YOU" />
      <meta
        property="og:description"
        content="누구나 간편하게 README.md 작성하기"
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="배포 링크" />
      <meta property="og:image" content="/images/kakao.png" />
      <meta property="og:image:alt" content="READ YOU 이미지" />
      <meta property="og:locale" content="ko_KR" />

      {/* Twitter */}
      <meta property="twitter:title" content="READ YOU" />
      <meta
        name="twitter:description"
        content="누구나 간편하게 README.md 작성하기"
      />
      <meta name="twitter:card" content="website" />
      <meta property="twitter:site" content="배포 링크(추가 예정)" />
      <meta name="twitter:image" content="/images/twitter.png" />
      <meta property="twitter:image:alt" content="READ YOU 이미지" />
    </Head>
  );
};
export default MetaHead;
