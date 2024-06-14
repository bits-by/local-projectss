import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [data,setData] = useState([])

  useEffect(() =>{
    axios.get('api/data')
    .then((response)=>{
      setData(response.data)
    })
    .catch((error)=>{
      console.log(error);
    })
  },[])
  return (
    <>
      <h2> Vite Applicaton is succesfully installed...</h2>
      <p> data :{data.length}</p> 

      {
        data.map((user) =>{
          <div key={user.id}>
            <h4>{user.title}</h4>
            <p>{user.body}</p>
          </div>
        })
      }
      
    </>


  )
}



export default App
