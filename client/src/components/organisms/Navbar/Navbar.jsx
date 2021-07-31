import React, {useState} from 'react'
import "./Navbar.css"
import Button from "../../atoms/Button/Button"
import Search from "../../molecules/Search/Search"
import {NavLink} from "react-router-dom"
import {useAuth} from "./../../../context/auth-context"
import {Link} from"react-router-dom"

function Navbar() {
    const {authState, dispatch} = useAuth();
    const [toggle, setToggle] = useState(true);
    const {isUserLoggedIn} = authState;


    function handleLogout(){
        dispatch({type:"LOGOUT", payload:{userId:authState.currentUser._id}})
    }
    return (
        <nav className="nav-container">
            <div className="nav__left">
                <div className="nav nav__brand">
                    <NavLink to="/">REStream</NavLink>
                </div>
                <div className="nav nav__pills">
                    <div className="nav nav__link">
                    <NavLink to="/categories" activeStyle={{
                            color: `var(--secondary-color)`,
                            fontWeight: 600,     
                    }}>
                        Categories    
                    </NavLink>
                    </div>
                    <div className="nav nav__link">
                    <NavLink to="/instructors" activeStyle={{
                            fontWeight: 600,
                            color: `var(--secondary-color)`,
                            
                        }}>
                            Instructors
                        </NavLink>
                    </div>
                    <div className="nav nav__link">
                        <NavLink to="/channels" activeStyle={{
                            fontWeight: 600,
                            color: `var(--secondary-color)`,
                            
                        }}>
                            Channels
                        </NavLink>
                    </div>
                </div>

                <div className="nav__search">
                    <Search />
                </div>
            </div>
            
            <div className="nav-CTA">
                {(isUserLoggedIn)?(<Button kind="filled" onClick={handleLogout}>Logout</Button>):
                (   <div>
                    <Button kind="filled"><Link to="/auth/login">Login</Link></Button>
                    <Button kind="filled"><Link to="/auth/signup">Signup</Link></Button>
                    </div>
                )}
            </div> 
        <div className="nav-mobile">
            <div className="nav__brand">
                    <NavLink to="/">REStream</NavLink>
            </div>
            <div
                onClick={() => setToggle(!toggle)}
                className={toggle ? "hamburger" : "hamburger active"}
            >
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div> 
          </div>
          {(!toggle) ?
          <div className={"nav-mobile__pills"}>
                    <div className="general__pills">
                    <div className="nav nav__link">
                    <NavLink to="/categories" activeStyle={{
                            color: `var(--secondary-color)`,
                            fontWeight: 600,     
                    }}  >
                        Categories    
                    </NavLink>
                    </div>
                    <div className="nav nav__link">
                    <NavLink to="/instructors" activeStyle={{
                            fontWeight: 600,
                            color: `var(--secondary-color)`,
                            
                        }}>
                            Instructors
                        </NavLink>
                    </div>
                    <div className="nav nav__link">
                        <NavLink to="/channels" activeStyle={{
                            fontWeight: 600,
                            color: `var(--secondary-color)`,
                            
                        }}>
                            Channels
                        </NavLink>
                    </div>
                    </div>
                    <div className="user-details__pills">
                    <div className="nav nav__link">
                    <NavLink to="/following" activeStyle={{
                            color: `var(--secondary-color)`,
                            fontWeight: 600,     
                    }}>
                        Following  
                    </NavLink>
                    </div>
                    <div className="nav nav__link">
                    <NavLink to="/liked" activeStyle={{
                            fontWeight: 600,
                            color: `var(--secondary-color)`,
                            
                        }}>
                            Liked
                        </NavLink>
                    </div>
                    <div className="nav nav__link">
                    <NavLink to="/playlists" activeStyle={{
                            fontWeight: 600,
                            color: `var(--secondary-color)`,
                            
                        }}>
                            Playlists
                        </NavLink>
                    </div>
                    <div className="nav nav__link">
                        <NavLink to="/history" activeStyle={{
                            fontWeight: 600,
                            color: `var(--secondary-color)`,
                            
                        }}>
                            History
                        </NavLink>
                    </div>
                    </div>
                    {(isUserLoggedIn) ?
                    <div className="auth__pills">
                    <div className="nav nav__link">
                    <div className="logout" onClick={handleLogout}>
                        Log out  
                    </div>
                    </div>
                    </div> : <div className="auth__pills">
                    <div className="nav nav__link">
                    <NavLink to="/auth/login" activeStyle={{
                            color: `var(--secondary-color)`,
                            fontWeight: 600,     
                    }}>
                        Login   
                    </NavLink>
                    </div>
                    <div className="nav nav__link">
                    <NavLink to="/auth/signup" activeStyle={{
                            fontWeight: 600,
                            color: `var(--secondary-color)`,
                            
                        }}>
                            Signup
                        </NavLink>
                    </div>
                    
                    
                    </div>}
                </div>:""}
         
       
        </nav>
    )
}

export default Navbar
