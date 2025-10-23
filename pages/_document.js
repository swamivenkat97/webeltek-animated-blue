import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* ✅ Favicon */}
        <link rel="icon" type="image/png" href="/favicon.png" />
        {/* Optional metadata */}
        <meta name="theme-color" content="#007BFF" />
        <meta name="description" content="Webeltek — Empowering Digital Growth" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
