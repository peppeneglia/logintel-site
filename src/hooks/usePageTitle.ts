import { useEffect } from 'react'

const SITE_NAME = 'Logintel'

/** Sets `document.title` for the current page and restores the site name on unmount. */
export function usePageTitle(title: string) {
  useEffect(() => {
    document.title = title
    return () => {
      document.title = SITE_NAME
    }
  }, [title])
}
