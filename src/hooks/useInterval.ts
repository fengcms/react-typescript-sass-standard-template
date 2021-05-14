import { useEffect, useRef } from 'react'

const useInterval = (callback: Function, delay: number): void => {
  const savedCallback = useRef<Function>(() => { })

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback
  })

  // Set up the interval.
  useEffect(() => {
    if (delay != null) {
      const interval = setInterval(() => savedCallback.current(), delay ?? 0)
      return () => clearInterval(interval)
    }
    return undefined
  }, [delay])
}

export default useInterval
