import { useEffect, useState } from 'react'

function SessionTimer() {
  const [seconds, setSeconds] = useState(0)
  const [running, setRunning] = useState(false)

  useEffect(() => {
    if (!running) return        // do nothing when paused

    const intervalId = setInterval(() => {
      setSeconds((s) => s + 1)
    }, 1000)

    return () => clearInterval(intervalId)   // cleanup function
  }, [running])

  return (
    <div>
      <h2>Session Timer</h2>
      <p>{seconds}s</p>
      <button onClick={() => setRunning(true)}>Start</button>
      <button onClick={() => setRunning(false)}>Stop</button>
      <button onClick={() => { setRunning(false); setSeconds(0) }}>Reset</button>
    </div>
  )
}

export default SessionTimer