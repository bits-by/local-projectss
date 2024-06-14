import './App.css'
import React,{useState} from 'react'

function App() {

  return (
    <>
    <MyComponent  />

    </>
  )
}

function MyComponent() {
  useEffect(() => {
    console.log("component mount")

    return () => {
      console.log("component Unmount")
    };
  }, []);
  return(
    <div>
      Inside my component..
    </div>
  )

  // Render UI
}

// class MyComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { count: 0 };
//   }

//   incrementCount = () => {
//     this.setState({ count: this.state.count + 1 });
//   }

//   render() {
//     return (
//       <div>
//         <p>{this.state.count}</p>
//         <button onClick={this.incrementCount}>Increment</button>
//       </div>
//     );
//   }
// }

// function MyComponent() {
//   const [count, setCount] = useState(0)

//   const increment = () => {
//     setCount(count+1)
//   }

//   return(
//     <div>
          // <p>{count}</p>
//       <button onClick={increment}>Increment </button>
//     </div>
//   )
// }

export default App
