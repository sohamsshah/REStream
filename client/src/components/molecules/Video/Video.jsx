import React from 'react'
import "./Video.css"
import {Link} from "react-router-dom"
import Image from "./../../atoms/Image/Image"
import Typography from "./../../atoms/Typography/Typography"

function Video({name, thumbnail, kind="video", category, redirect}) {
    return (
        <div className={kind === 'video'? 'video': 'small-video'}>
            <Link to={redirect}>
                <Image kind={kind} alt="video" src={thumbnail} />
            </Link>
            <div className="video__info">
                <Typography fontSize="m" fontWeight="medium">{name}</Typography>
            </div>
        </div>
    )
}

export default Video
