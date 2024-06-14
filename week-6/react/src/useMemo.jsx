import { useEffect, useState, useMemo } from "react";

//useMemo
const  App = () => {

  const [inputValue, setInputValue] = useState(0);
  const [counter,setCounter] = useState(1)
  // const [finalValue, setFinalvalue] = useState(0);
  // not using useEffect as it is not optimal here, we are doing 2 rendering and also one usestate is depends on others
  // useEffect(() =>{
  //   let val =0;
  //   for(let i=0;i<= inputValue; i++){
  //   val = val + i;
  //   }
  //   setFinalvalue(val);
  // },[inputValue]);

  //optimal way useing useMemo...
  let count = useMemo(() =>{
      let val =0;
      for(let i=0;i<= inputValue; i++){
      val = val + i;
      }
      return val;
  },[inputValue]);

  
  return(
    <>
    <input onChange={(e) => setInputValue(e.target.value)}></input>
    <p>Sum from 1 to {inputValue} is : {count}</p>
    <button onClick={() => setCounter(count+1)}>Counter {counter}</button>
    </>
  )

}
export default App