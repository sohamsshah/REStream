import React from 'react'
import Sidebar from "./../../organisms/Sidebar/Sidebar"
import "./VideoLayout.css"


function VideoLayout({Content}) {
    return (
        <div className="video-container">
          <div className="video__sidebar">
          <Sidebar />
          </div> 
          <div className="video__content">
            <Content /> 
          </div>
        </div>
    )
}

export default VideoLayout
