import './App.css';
import {Routes, Route} from "react-router-dom"
import {NavLink} from "react-router-dom"
import Home from './components/Home';
import Support from './components/Support';
import About from './components/About';
import MainHeader from './components/MainHeader';

function App() {
  return (
    <div className="App">

    <nav>
      <ul>
        <li>
         <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/support">Support</NavLink>
        </li>       
      </ul>
    </nav>
      
      <Routes>
        <Route path="/" element={<MainHeader />} > 
            {/* Default Route  */}
            <Route index element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/support" element={<Support/>} />
            <Route path="*" element={<h3>Not a Page .....</h3>} />
        </Route>                                                        
      </Routes>


    </div>
  );
}

export default App;
