import { useCallback, useEffect, useState } from 'react'

const wrapper = (type: 'innerWidth' | 'innerHeight') => {
  return () => {
    const [state, setState] = useState(window[type])

    useEffect(() => {
      const handler = () => setState(window[type])
      window.addEventListener('resize', handler)

      return window.addEventListener('resize', handler)
    }, [])

    return state
  }
}

export const useWidth = wrapper('innerWidth')
export const useHeight = wrapper('innerHeight')