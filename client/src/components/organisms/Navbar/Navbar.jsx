import React from 'react'
import "./Navbar.css"
import Button from "../../atoms/Button/Button"
import Search from "../../molecules/Search/Search"
import {NavLink} from "react-router-dom"
import {useAuth} from "./../../../context/auth-context"

function Navbar() {
    const {authState, dispatch} = useAuth();
    const {isUserLoggedIn} = authState;

    function handleLogin(){
        dispatch({type:"LOGIN", payload:{userId:"60a13ddc7e25f80154b8ec80"}})
    }

    function handleLogout(){
        dispatch({type:"LOGOUT", payload:{userId:authState.currentUserId}})
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
                            borderBottom: `solid 3px var(--secondary-color)`
                    }}>
                        Categories    
                    </NavLink>
                    </div>
                    <div className="nav nav__link">
                    <NavLink to="/instructors" activeStyle={{
                            fontWeight: 600,
                            color: `var(--secondary-color)`,
                            borderBottom: `solid 3px var(--secondary-color)`
                        }}>
                            Instructors
                        </NavLink>
                    </div>
                    <div className="nav nav__link">
                        <NavLink to="/channels" activeStyle={{
                            fontWeight: 600,
                            color: `var(--secondary-color)`,
                            borderBottom: `solid 3px var(--secondary-color)`
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
                    <Button kind="filled" onClick={handleLogin}>Login</Button>
                    <Button kind="outlined">Signup</Button>
                    </div>
                )}
                
            </div>            
        </nav>
    )
}

export default Navbar
