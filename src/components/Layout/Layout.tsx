import type { ReactNode } from 'react'

export type Props = {
  children: ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    // <Header />
    <main id="main" tabIndex={-1}>
      {children}
    </main>
    // <Footer />
  )
}

export default Layout
