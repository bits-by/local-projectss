import { useState } from "react"
import "./app.css"

export default function App() {
  const [show, setShow] = useState(true);
  return(
    <div className="container">
      <button onClick={() => setShow((show) => !show)}> show/hide</button>
      {show ? <h1>welcome to the react challenges</h1> : null}
    </div>
  )
}