
import axios from "axios";

const App = () => {

  async function main() {
    const response = await axios.get('https://sum-server.100xdevs.com/todos')
    console.log(response.data.todos)
  }
  return (
    <div>

    
    </div>
  )
}
export default App
