import React from 'react'
import Sidebar from "./../../organisms/Sidebar/Sidebar"
import "./VideoLayout.css"


function VideoLayout({Content}) {
    return (
        <div className="video-container">
         
          <Sidebar />
          
          <div className="video__content">
            <Content /> 
          </div>
        </div>
    )
}

export default VideoLayout
