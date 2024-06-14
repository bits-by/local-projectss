import {BrowserRouter, Routes , Route, useNavigate} from 'react-router-dom'
import Dashboard from './components/Dashboard';
import LandingPage from './components/LandingPage';
// const LandingPage = React.lazy(() =>  import('./components/LandingPage'))
// const Dashboard = React.lazy(() => import('./components/Dashboard'))

const App = () => {
  return (
    <>
    {/* <button onClick={() => {window.location.href='/landingpage'}}>Landing Page </button>
    <button onClick={() => {window.location.href='/dashboard'}}>Dashboard page</button> */}
    
      <BrowserRouter>
        <Appbar />
        <Routes>
          <Route path='/' element={<LandingPage/>}> landing page</Route>
          <Route path='/dashboard' element={<Dashboard />} > Dashboard</Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

function Appbar() {
  const navigate = useNavigate();
  return(
    <>
      <button onClick={() =>{ navigate('/ ')}}>landing page</button>
      <button onClick={() =>{ navigate('/dashboard')}}>Dashboard</button>
    </>
  )
}
export default App