// import axios from "axios"
import { useEffect, useState } from "react";
import './App.css'
import axios from "./axios";

// const API = 'https://jsonplaceholder.typicode.com/'

const App = () => {
  const [myData,setMyData] = useState([]);
  const [isError, setIsError] = useState("");


  // NOTE: using Promises..
  // useEffect(() => {
  //   axios.get('https://jsonplaceholder.typicode.com/users')
  //   .then((res) => setMyData(res.data))
  //   .catch((error) => setIsError(error.message))
  // }, []);

  // NOTE: async  await... with try catch
  const getApiData = async() => {
    try {
      const res = await axios.get("/users");
      setMyData(res.data);
    }catch (error) {
      setIsError(error.message);
    }
    
  }
  useEffect(() => {
    getApiData();
  },[])

  return(
    <div>
       API testing using Axios...
       {isError !== "" && <h2>{isError}</h2>}
       <div className="grid">
          {
            myData.map((user) => {
              const {id, name, email} = user;
              return<div className="card" key={id}>
                <h2>{id}</h2>
                <h2>{name}</h2>
                <h4>{email}</h4>
              </div>
            })
          }
       </div>
    </div>
    
  )
}
export default App