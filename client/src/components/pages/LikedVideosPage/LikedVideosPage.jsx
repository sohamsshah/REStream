import React, {useEffect} from 'react'
import {useVideo} from "./../../../context/video-context"
import {useAuth} from "./../../../context/auth-context"
import ContentHeading from '../../molecules/ContentHeading/ContentHeading'
import VideoGroup from "./../../organisms/VideoGroup/VideoGroup"
import Video from "./../../molecules/Video/Video"
import "./LikedVideosPage.css"
import {Link} from "react-router-dom"

function LikedVideosPage() {
    const {authState} = useAuth();
    const {isUserLoggedIn} = authState;
    const { videoState} = useVideo();
    useEffect(() => { window.scrollTo(0, 0); }, []);
        return (
        (isUserLoggedIn) ? 
        <div className="liked-videos">
           <div className="liked">
            <ContentHeading fontSize="2rem">Liked Videos</ContentHeading>
            <div>
            {videoState.likedVideos.length === 0 ? 
            <div className="liked-videos">
            Seems you haven't liked any Videos yet. Like some <span className="link-text"><Link to="/">videos</Link></span> to get started!
            </div> :  <VideoGroup> 

            {videoState.likedVideos.map(({videoId}) => 
            <div>
                <Video name={videoId.name} thumbnail={videoId.thumbnail} kind="small-video" redirect={`/watch/${videoId._id}`}/>
            </div>)}
            </VideoGroup>

            }
                           
            </div>
            </div>
        </div> : <div className="liked-videos">
        
        </div>
    )
}

export default LikedVideosPage
