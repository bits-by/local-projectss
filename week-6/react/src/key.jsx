import React from 'react'
import { useState } from 'react'

let counter = 4;
const App = () => {
  const [todos,setTodos] = useState([
    {
      id:1,
      title: "goto gym",
      description: "gym time"
    },
    {
      id:2,
      title: "goto hospital",
      description: "hospital time"
    },
    {
      id:3,
      title: "goto bed",
      description: "bed time"
    }
  ])
  function addTodo(){
    setTodos([...todos ,{
      id:counter++,
      title: "Wake up ",
      description: "Morning time..."
    }])
  }
  return (
    <>
    <button onClick={addTodo}>Add a Todo </button>
    {todos.map(todo => <Todo key={todo.id} title={todo.title} description={todo.description} />)}                                                                             
    </>
  )
}

function Todo({title, description}) {
  return(
    <>
      <h3>{title}</h3>
      <h5>{description}</h5>
    </>
  )
}

export default App
