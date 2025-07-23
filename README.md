# useLoop
### A  React Hook for creating smooth, timed loop visualizations
```useLoop``` is a simple and declarative React hook designed to create timed, looped visualizations by iterating through a range of integers over a specified duration.

It's ideal for use cases such as:
- Dynamic text animations: smoothly cycle through words, phrases, or create captivating letter-by-letter reveals;
- Automated carousels: effortlessly build looping image or content sliders without extra dependencies;
- Data-driven animations: progressively reveal charts, stats, or any numeric visualization over time;
- Interactive tutorials: visually guide users step-by-step with timed highlights or instructions;
- Time-based UI effects: trigger style or layout changes seamlessly in sync with your app’s flow

Instead of managing timers or frame calculations manually, ```useLoop``` gives you a clean way to bind time to logic, driven by a single value that updates over time.

## 📦 Installation

```bash
npm install use-loop
```

## 🚀 Usage

```tsx
import { useLoop } from './useLoop'

function TooEasy() {
  const words = ['beautiful', 'easy', 'modern', 'elegant', 'fun']

  const loop = useLoop({
    from: 0,
    to: words.length,
    duration: 5,
  })

  return (
    <div>
      <div className="text-7xl font-semibold text-center">
        Loops are

        <div className="p-2 py-3 mt-2 animate-blur">
          {words[loop.value]}
        </div>
      </div>
    </div>
  )
}
```

## 🧠 API

### `useLoop(options: LoopOptions): LoopResult`

### LoopOptions

| Option    | Type                     | Default | Description                                   |
|-----------|--------------------------|---------|-----------------------------------------------|
| `from`    | `number`                 | —       | Start index (inclusive)                       |
| `to`      | `number`                 | —       | End index (exclusive)                         |
| `duration`| `number` (in seconds)    | —       | Total duration for the full cycle             |
| `mode`    | `'loop' \| 'once'`       | `'loop'`| Whether to restart after reaching the end     |

### LoopResult

| Return      | Type        | Description                          |
|-------------|-------------|--------------------------------------|
| `value`     | `number`    | Current interpolated integer value   |
| `play()`    | `() => void`| Starts or resumes the loop           |
| `pause()`   | `() => void`| Pauses the loop                      |


## ⏸ Pause, Resume and Reset
```useLoop``` exposes three control functions (```.play()```, ```.pause()```, and ```.reset()```) allowing you to start, stop, or restart the loop programmatically.

```tsx
import { useLoop } from './useLoop'

function TooEasy() {
  const loop = useLoop({ from: 0, to: 5, duration: 2 })
  const words = ['beautiful', 'easy', 'modern', 'elegant', 'fun']

  return (
    <div
      onMouseEnter={() => loop.pause()}
      onMouseOut={() => loop.play()}
    >
      {words[loop.value]}
    </div>
  )
}
```

## 🚧 To Do
Add examples of visualizations using ```useLoop```.

## 📄 License
MIT — Feel free to use, modify, and share!