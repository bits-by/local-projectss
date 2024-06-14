import { useEffect, useState } from 'react'
import axios from "axios"

const App = () => {
  const [todos, setTodos] = useState([])

  useEffect(()=>{
    // setInterval(()=>{
    //   fetch("https://sum-server.100xdevs.com/todos")
    //   .then (async function(res) {
    //     const json = await res.json();
    //     setTodos(json.todos);
    // })
    // },4000)
      axios("https://sum-server.100xdevs.com/todos")
      .then(res => setTodos(res.data.todos))
  },[])

  return (
    <>
    {todos.map(todo => <Todo key={todo.id} title={todo.title} description={todo.description} />)}                                                         
    </>
  )
}
function Todo({id,title, description}) {
  return(
    <>
      <h3>{id}</h3>
      <h3>{title}</h3>
      <h5>{description}</h5>
    </>
  )
}

export default App