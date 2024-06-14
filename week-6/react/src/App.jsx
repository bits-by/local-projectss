import { useEffect, useState, useMemo, memo, useCallback } from "react";

const  App = () => {
  const [counter,setCounter] = useState(1)

  // function a() {
  //   console.log('hi there 1234')
  // }
  const a = useCallback(function() {
    console.log('hi there')
  },[])
  
  return(
    <>
    <button onClick={() => setCounter(counter+1)}>Counter {counter}</button>
    <Demo a={a} />
    </>
  )

}
const Demo = memo(function({a}) {
  console.log('re-render demo');
  return <div>
    inside memo
  </div>
})

export default App