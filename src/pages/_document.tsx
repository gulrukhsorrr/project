import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='en'>
      <Head />
      <body>
        <Main />
        <NextScript />
        <script src='https://cdn.paycom.uz/integration/js/checkout.min.js'></script>
        {process.env.NODE_ENV === 'production' && (
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MR75TW55"
          height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
            }}
          />
        )}
      </body>
    </Html>
  )
}
