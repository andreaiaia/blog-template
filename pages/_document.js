import { Html, Head, Main, NextScript } from 'next/document';
import { BLOG } from '../blog.config';

export default function Document() {
  const meta = {
    title: `${BLOG.NAME}`,
    description: `${BLOG.DESCRIPTION}`,
    image: '/images/matera.webp',
  };

  return (
    <Html lang="en">
      <Head>
        <meta name="robots" content="follow, index" />
        <meta name="description" content={meta.description} />
        <meta property="og:site_name" content={meta.title} />
        <meta
          property="og:description"
          content={meta.description}
          key="description"
        />
        <meta property="og:title" content={meta.title} key="title" />
        <meta property="og:image" content={meta.image} />
        <meta property="og:type" content="website" />
        {/* <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@yourname" /> */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
