import React from 'react'
import { useNavigate } from 'react-router-dom'
const Support = () => {
    const navigate = useNavigate();
    function clickHandler()  {
        //move to about page
        navigate("/about");
    }
    function backHandler(){
        navigate(-1);
    }
  return (
    <div>
        <div>Support Page</div>
        <button onClick={clickHandler}> Move to About Page.</button>
        <button onClick={backHandler}>Go Back! </button>
    </div>
    
  )
}

export default Support