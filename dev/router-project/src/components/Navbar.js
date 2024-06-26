import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/Logo.svg"
import { toast } from 'react-hot-toast'

const Navbar = ({isLoggedIn, setIsLoggedIn}) => {
  

  return (
    <div className='flex justify-evenly'>
        <Link to="/">
            <img src={logo} alt="logo" width={160} height={32} loading="lazy"/>
        </Link>
        
        <nav>
            <ul className='flex gap-3'>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/">About</Link>
                </li>
                <li>
                    <Link to="/">Contact</Link>
                </li>
            </ul>
        </nav>
        {/* LogIn - SignUp - LogOut - Dashboard */}

        <div className='flex ml-5 mr-3 gap-3'>

            { !isLoggedIn &&
            <Link to="/login">
                <button>
                    LogIn
                </button>
            </Link>
            }

            { !isLoggedIn &&
            <Link to="/signup">
                <button onClick={() =>{
                    setIsLoggedIn(false);
                    toast.success("Logged Out")                                                                  
                }}>
                    SignUp
                </button>
            </Link>
            }

            { isLoggedIn &&
            <Link to="/">
                <button onClick={() =>{
                    setIsLoggedIn(false);
                    toast.success("Logged Out")                                                                  
                }}>
                    LogOut
                </button>
            </Link>
            }
            { isLoggedIn &&
            <Link to="/dashboard">
                <button>
                    Dashboard
                </button>
            </Link>
            }
        </div>

    </div>
  )
}

export default Navbar