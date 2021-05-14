import React from 'react'
import "./Sidebar.css"
import {NavLink} from "react-router-dom"
import { AiFillHome, AiFillCompass, AiOutlineHistory, AiFillLike , AiFillClockCircle, AiFillHeart} from "react-icons/ai";
import {RiComputerFill, RiPlayList2Fill} from "react-icons/ri"
import {GiTeacher} from "react-icons/gi"

function Sidebar() {
    return (
        <aside className="sidebar">
            <div>
                <NavLink activeStyle={{
                    backgroundColor: `var(--secondary-color)`,
                    color: `white`
                }}
                className="sidebar__pills" exact to="/">
                    <div><AiFillHome /></div> 
                    <div>Home</div>
                </NavLink>
                
                <NavLink activeStyle={{
                    backgroundColor: `var(--secondary-color)`,
                    color: `white`
                }}
                className="sidebar__pills" to="/categories">
                    <div><AiFillCompass /></div> 
                    <div>Categories</div>
                </NavLink>

                <NavLink activeStyle={{
                    backgroundColor: `var(--secondary-color)`,
                    color: `white`
                }}
                className="sidebar__pills" to="/instructors">
                    <div><GiTeacher /></div> 
                    <div>Instructors</div>
                </NavLink>
                <NavLink activeStyle={{
                    backgroundColor: `var(--secondary-color)`,
                    color: `white`
                }}
                className="sidebar__pills" to="/channels">
                    <div><RiComputerFill /></div> 
                    <div>Channels</div>
                </NavLink>
            </div>
                <hr />
            <div>
            <NavLink activeStyle={{
                    backgroundColor: `var(--secondary-color)`,
                    color: `white`
                }}
                className="sidebar__pills" exact to="/following">
                    <div><AiFillHeart /></div> 
                    <div>Following</div>
                </NavLink>
                
                <NavLink activeStyle={{
                    backgroundColor: `var(--secondary-color)`,
                    color: `white`
                }}
                className="sidebar__pills" to="/liked">
                    <div><AiFillLike /></div> 
                    <div>Liked Videos</div>
                </NavLink>

                <NavLink activeStyle={{
                    backgroundColor: `var(--secondary-color)`,
                    color: `white`
                }}
                className="sidebar__pills" to="/playlists">
                    <div><RiPlayList2Fill /></div> 
                    <div>Your Playlists</div>
                </NavLink>

                <NavLink activeStyle={{
                    backgroundColor: `var(--secondary-color)`,
                    color: `white`
                }}
                className="sidebar__pills" to="/history">
                    <div><AiFillClockCircle /></div> 
                    <div>Watch Later</div>
                </NavLink>
                <NavLink activeStyle={{
                    backgroundColor: `var(--secondary-color)`,
                    color: `white`
                }}
                className="sidebar__pills" to="/history">
                    <div><AiOutlineHistory /></div> 
                    <div>Watch History</div>
                </NavLink>
            </div>
            
        </aside>
    )
}

export default Sidebar
