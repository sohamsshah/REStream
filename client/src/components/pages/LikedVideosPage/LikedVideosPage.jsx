import React from 'react'
import {useVideo} from "./../../../context/video-context"
import {useAuth} from "./../../../context/auth-context"
import ContentHeading from '../../molecules/ContentHeading/ContentHeading'
import VideoGroup from "./../../organisms/VideoGroup/VideoGroup"
import Video from "./../../molecules/Video/Video"
import "./LikedVideosPage.css"

function LikedVideosPage() {
    const {authState} = useAuth();
    const {isUserLoggedIn} = authState;
    const { videoState} = useVideo();
        return (
        (isUserLoggedIn) ? 
        <div className="liked-videos">
           <div className="liked">
            <ContentHeading fontSize="2rem">Liked Videos</ContentHeading>
            <div>
            <VideoGroup> 

            {videoState.likedVideos.map(({videoId}) => 
            <div>
                <Video name={videoId.name} thumbnail={videoId.thumbnail} kind="small-video" redirect={`/watch/${videoId._id}`}/>
            </div>)}
            </VideoGroup>
                
            </div>
            </div>
        </div> : <div className="liked-videos"></div>
    )
}

export default LikedVideosPage
