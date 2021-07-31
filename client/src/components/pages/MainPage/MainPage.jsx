import React, {useEffect} from 'react'
import Navbar from "./../../organisms/Navbar/Navbar"
import MainLayout from "./../../templates/MainLayout/MainLayout"

function MainPage({Content}) {
    useEffect(() => { window.scrollTo(0, 0); }, []);
    return (
        <div className="main-page">
           <Navbar />
           <MainLayout Content={Content}/> 
        </div>
    )
}

export default MainPage
