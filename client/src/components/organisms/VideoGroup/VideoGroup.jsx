import React from 'react'
import "./VideoGroup.css"

function VideoGroup({kind="row" , children}) {
    return (
        <div className={kind === "row" ? `video-group` : `video-group video-group__col`}>
            {children}
        </div>
    )
}

export default VideoGroup