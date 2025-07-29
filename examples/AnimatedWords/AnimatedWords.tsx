import { useLoop } from '../../src/useLoop'
import "./animatedWords.css"

export default function Words({ words }: { words: string[] }): React.ReactNode {
  const loop = useLoop({
    from: 0,
    to: words.length,
    duration: 10,
  })

  return (
    <div className="text">
      Loops are

      <div
        key={loop.value}
        className="word animated-blur"
      >
        {words[loop.value]}
      </div>
    </div>
  )
}