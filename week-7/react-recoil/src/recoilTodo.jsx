import React, { useState } from 'react'
import { RecoilRoot, useRecoilState } from 'recoil'
import { titleAtom } from './store/atoms/count';

const App = () => {
  return (
    <div>
            <RecoilRoot>
                <Todo />
            </RecoilRoot>
    </div>
  )
}

function Todo() {
    // const [title, setTitle] = useState("");
    const title = useRecoilState(titleAtom)
    return (
        <div>
            <input placeholder='title' onChange={(e) =>{ setValue(e.target.value)}}></input>
            <input placeholder='description'></input>
            <button onClick={addTodo}>Add Todo</button>
        </div>
    )
}
function addTodo(){
    
}

export default App