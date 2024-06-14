import { useState } from "react";
import "./app.css"

function App () {
  let time = new Date().toLocaleTimeString();
  const  [currtime, setCurrTime] = useState(time);
  const [toggle, setToggle] =useState(false);
 
    // setInterval(()=> {
    //   time = new Date().toLocaleTimeString();
    //   setCurrTime(time);
    // },[1000])
    function UpdatedTime() {
      setInterval(()=>{
        time = new Date().toLocaleTimeString();
        setCurrTime(time);
      },[1000]);
    }
    
  return(
    <div className="body">
      <h4 style={{color: "white"}}>{currtime}</h4>
      <button onClick={UpdatedTime}>Get Updated Time</button> <br/>
      <button className="body" onClick={() => setToggle(toggle ? true : false)}>Change theme</button>
    </div>
  )
}

export default App



// virtual DOM 
// view oriented 
// Unidirectional data Flow
// component flow 
//  react let you choose what do you want to use. (choose your own tech). 

//  virtual DOM  and Real DOM 
//  reconsiliation / diffing Algorithum 
//  props and state how data flow between component 
//  server & client side rendering . (used in heavey data usage site) 
//     client side rendering -> app  server side endering data heavy website 
  
// refs in react why we are not using ref on website? 
// react fiber? 
// synthetic event in react
// why hook  -> so we can resuse in another components. 





 
 





