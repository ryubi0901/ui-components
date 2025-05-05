'use client'

import Script from 'next/script'

const GA_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID

const PageView = () => {
  return GA_ID !== undefined && process.env.NODE_ENV === 'production' ? (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
      <Script id="google-analytics">
        {`
          window.datalayer = window.datalayer || [];
          function grag(){datalayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${GA_ID}');
        `}
      </Script>
    </>
  ) : null
}

export default PageView
