import { useEffect, useState, useRef } from 'react'

type LoopOptions = {
  duration: number;
  from: number;
  to: number;
  mode?: 'loop' | 'once';
}

type LoopResult = {
  value: number;
  play: () => void;
  pause: () => void;
  reset: () => void;
}

export function useLoop({ duration, from, to, mode='loop' }: LoopOptions): LoopResult {
  const durationInMilliseconds  = duration * 1000
  const requestId = useRef<number | null>(null)
  const startTime = useRef<number | null>(null)
  const elapsedAtPause = useRef(0)
  const [value, setValue] = useState(from)

  const updateValue = (animationProgress: number) => {
    setValue(Math.floor(from + (to - from) * Math.min(1 - Number.EPSILON, animationProgress)))
  }

  const animate = (timestamp: number) => {
    if (!startTime.current) {
      startTime.current = timestamp
    }

    const elapsed = timestamp - startTime.current + elapsedAtPause.current;
    const animationProgress = Math.min(elapsed / durationInMilliseconds, 1)
    updateValue(animationProgress)

    if (animationProgress < 1) {
      requestId.current = requestAnimationFrame(animate)
    } else {
      startTime.current = null
      elapsedAtPause.current = 0
      requestId.current = mode === 'loop' ? requestId.current = requestAnimationFrame(animate) : null
    }
  }

  const play = () => {
    if (!requestId.current) {
      requestId.current = requestAnimationFrame(animate)
    }
  }

  const pause = () => {
    if (requestId.current) {
      cancelAnimationFrame(requestId.current)
      requestId.current = null

      if (startTime.current !== null) {
        elapsedAtPause.current += performance.now() - startTime.current
        startTime.current = null
      }
    }
  }

  const reset = () => {
    pause()
    elapsedAtPause.current = 0
    setValue(from)
  }

  useEffect(() => {
    play()

    return pause
  }, [from, to, duration, mode])

  return {
    value,
    play,
    pause,
    reset
  }
}