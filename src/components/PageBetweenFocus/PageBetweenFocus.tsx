'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useRef } from 'react'

const usePageBetweenFocus = () => {
  const pathname = usePathname()
  const previousPathname = useRef(pathname)

  useEffect(() => {
    if (previousPathname.current !== pathname) {
      const main = document.getElementById('main')
      main?.focus()
    }

    previousPathname.current = pathname
  }, [pathname])
}

const PageBetweenFocus = () => {
  usePageBetweenFocus()

  return null
}

export default PageBetweenFocus
