import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: [initialProps.styles, sheet.getStyleElement()],
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="ko">
        <Head>
          <link
            rel="stylesheet"
            as="style"
            href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
          />
          <title>READ YOU</title>
          <meta name="title" content="READ YOU" />
          <meta name="keyword" content="README, READYOU, 간편함, 프로젝트" />
          <meta
            name="description"
            content="누구나 간편하게 README.md 작성하기"
          />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          {/* Open Graph */}
          <meta property="og:title" content="READ YOU" />
          <meta
            property="og:description"
            content="누구나 간편하게 README.md 작성하기"
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://readyou.vercel.app/" />
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
          <meta property="twitter:site" content="https://readyou.vercel.app/" />
          <meta name="twitter:image" content="/images/twitter.png" />
          <meta property="twitter:image:alt" content="READ YOU 이미지" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
