import React from 'react'

function VideoEmbed({height="560", width="315", id, ...props}) {
    return (
        <div {...props}>
           <iframe width={width} height={height} src= {`https://www.youtube.com/embed/${id}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> 
        </div>
    )
}

export default VideoEmbed
