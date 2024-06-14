import {createContext, useContext, useState} from 'react'
import { CountContext } from './Context';

//wrap anyone that wants to use the teleported value inside a providerf
function App() {
    const [count, setCount] = useState(0);
    return(
        <>
        <CountContext.Provider value={count}>
           <Count setCount={setCount}/>
        </CountContext.Provider>
        </>
    )
}
function Count({setCount}) {
    return <div>
        <CountRender />
        <Buttons setCount={setCount}/>
    </div>
}

function Buttons({setCount}) {
    const count = useContext(CountContext)
    return <div>
        <button  onClick={() => { setCount(count+1 )}}>Incerese</button>
        <button  onClick={() => { setCount(count-1)}}>Decerese</button>

    </div>
}

function CountRender() {
    const count = useContext(CountContext);
    return<div>
        {count}
    </div>
}
export default App
