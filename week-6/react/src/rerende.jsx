import React, {useState} from 'react'

const App = () => {
  const [title,setTitle] = useState("Vivek1")
  function updateTitle(title){
  setTitle(Math.random());
  }
  return (
    <>
      {/* <h3>{title}</h3> */}

      {/* <UpdateHeader /> <br /> */}
      <button onClick={updateTitle}>Click here</button>
      <Header title={title} />
      <Header title="Vivek2" /> <br />
      <Header title="Vivek3" /> <br/>
      <Header title="Vivek4" /> <br />
    </>
  )
}

//  function UpdateHeader() {
//   const [title, setTitle] = useState("Vivek1");
//   function updateTitle() {
//     setTitle(Math.random())
//   }
//   return(
//     <>
//       <button onClick={updateTitle}>Click here to update</button> <br/>
//       <Header title={title}  />
//     </>
//   )

//  }

const Header = React.memo(
  function Header({title}) {
    return(
      <>
      {title}
      </>
    )
  }
)

export default App