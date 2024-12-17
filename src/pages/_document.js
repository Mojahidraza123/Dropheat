import { Html, Head, Main, NextScript } from "next/document";
import IconBundle from "./IconBundle";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Dropheat App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body>
        <Main />
        <NextScript />
        <IconBundle />
      </body>
    </Html>
  );
}
