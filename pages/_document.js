import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head >
          <Script id="mcjs" dangerouslySetInnerHTML={{
              __html: `!function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/f89e24801b73abf6542871f91/7c95f6c9aadc13560456b2a52.js");`}}/>
          <Script async src={`https://www.googletagmanager.com/gtag/js?id=G-LBLMF0QDQH`}></Script>
          <Script  dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments)}
            gtag('js', new Date());

            gtag('config', 'G-LBLMF0QDQH');`}}
          />

        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
