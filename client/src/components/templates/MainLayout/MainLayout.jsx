import React from 'react'
import Sidebar from "./../../organisms/Sidebar/Sidebar"
import "./MainLayout.css"

function MainLayout({Content}) {
    return (
        <div className="main-container">
          <Sidebar /> 
          <div className="main__content">
            <Content /> 
          </div>
        </div>
    )
}

export default MainLayout