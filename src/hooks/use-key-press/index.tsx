import { useEffect } from 'react'

function useKeyPress(key: string, action: () => void) {
  useEffect(() => {
    function onKeydown(e: KeyboardEvent) {
      if (e.key === key) action()
    }
    window.addEventListener('keydown', onKeydown)
    return () => window.removeEventListener('keydown', onKeydown)
  }, [key, action])
}

export { useKeyPress }
