// import {useState} from 'react'
// // let state = {
// //   count: 0
// // }

// const App = () => {

//   const [count, setCount] = useState(0)

//   function handler () {
//     setCount(count+1)
//     // state.count = state.count+1;
//     // console.log(state.count)
//   }
//   return (
//     <div>

//       <CustomButton count={count} setCount={setCount} />


//       {/* <button className="bg-blue-200 rounded-sm"
//       onClick={handler}
//       >Counter {count}</button> */}
//     </div>
//   )
// }

// function CustomButton(props){

//   function onHandler(){
//     props.setCount(props.count+1)
//   }

//   return <button className="rounded-sm bg-blue-200 border-4" onClick={onHandler}>
//     Counter {props.count}
//   </button>
// }

// export default App

import { useState } from "react"

const App = () => {

    const [count, setCount] = useState(0)


        return(
            <> 
            <div className="flex justify-center items-center h-screen text-3xl border">
                <button  className="px-4 px-2 bg-blue-300 mr-2" onClick={() =>{setCount(count-1)}}>-</button>
                <p>{count}</p>
                <button className="px-4 px-2 bg-blue-300 ml-2" onClick={()=> {setCount(count+1)}}>+</button>
            </div>
            
            </>
        )
}

export default App;




