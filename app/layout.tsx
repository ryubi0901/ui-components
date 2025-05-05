import '~/src/styles/index.css'
import 'scroll-behavior-polyfill'
import 'focus-visible'
import type { Metadata } from 'next'
import { type ReactNode, Suspense } from 'react'

import { Layout } from '~/src/components/Layout'
import { PageBetweenFocus } from '~/src/components/PageBetweenFocus'
// import { PageView } from '~/src/components/base/molecules/PageView'
import { WindowNarrow } from '~/src/components/WindowNarrow'

export const metadata: Metadata = {
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_SITE_URL}${process.env.NEXT_PUBLIC_BASE_PATH}`),
  title: '',
  description: '',
  openGraph: {
    title: '',
    description: '',
    images: '/og.png',
  },
  twitter: {
    card: 'summary_large_image',
  },
}

export default function BaseLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja">
      <body className="font-sans text-black leading-normal">
        <Layout>{children}</Layout>

        <WindowNarrow />
        <Suspense fallback={null}>
          <PageBetweenFocus />
        </Suspense>

        {/* Google Analytics を使うとき */}
        {/* <Suspense fallback={false}>
          <PageView />
        </Suspense> */}
      </body>
    </html>
  )
}
