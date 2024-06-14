import './App.css'

import { useState } from "react"

function App() {
  const[todos, setTodos] =useState([{
    name: "Vivek",
    description: "Professor",
  },{
    name: "Kalicharan",
    description: "Sutdent",
  },{
    name: "Ravan",
    description: "Magician",
  }])

  function addTodo(){
    let newTodo = {
      name:"surya",
      description: "teacher"
    }
    setTodos([...todos,newTodo])
    
  }
  return (
      <div>
        <button onClick={addTodo}>Add New Todo ...</button>
        {
          todos.map(function(todo) {
            return <Todo name={todo.name} description={todo.description}  />
          })}
      </div>
  )
}
  function Todo(props){
    return (
      <div className="border-2 my-4 w-4/12 ">
        <h3 className="text-3xl text-gray-200">{props.name}</h3>
        <h4 className="text-2xl">{props.description}</h4>
      </div>
    )
  }

export default App
