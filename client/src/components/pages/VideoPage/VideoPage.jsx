import React from 'react'
import Navbar from "./../../organisms/Navbar/Navbar"
import VideoLayout from "./../../templates/VideoLayout/VideoLayout"

function VideoPage({Content}) {
    return (
        <div>
           <Navbar />
           <VideoLayout Content={Content}/> 
        </div>
    )
}

export default VideoPage
