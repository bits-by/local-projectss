import { useState } from "react"

export default function App() {
  const [timer,setTimer] = useState(0)

  function startTime() {
    window.myTimer = setInterval(()=> {
      setTimer((timer) => timer + 1);
    },1000)
  }
  function stopTimer() {
    clearInterval(window.myTimer)
  }
  function resetTimer() {
    clearInterval(window.myTimer)
    setTimer(0)
  }
  return(
    <div>
      <h3>Timer</h3>
      <span>{Math.trunc(timer/60)} min</span>
      <span>{timer % 60} sec</span>
      <div>
        <button onClick={startTime}>Start</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  )
}