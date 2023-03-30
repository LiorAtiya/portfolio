import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;400;700&display=swap" rel="stylesheet" />
      </Head>
      <body className='bg-gradient-to-r from-green to-blue-400 dark:from-dark-700 dark:to-dark-700 dark:text-white'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
