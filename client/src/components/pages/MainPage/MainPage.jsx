import React from 'react'
import Navbar from "./../../organisms/Navbar/Navbar"
import MainLayout from "./../../templates/MainLayout/MainLayout"

function MainPage({Content}) {
    return (
        <div>
           <Navbar />
           <MainLayout Content={Content}/> 
        </div>
    )
}

export default MainPage
