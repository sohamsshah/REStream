import React from 'react'
import {useVideo} from "./../../../context/video-context"
import {useAuth} from "./../../../context/auth-context"
import ContentHeading from '../../molecules/ContentHeading/ContentHeading'
import VideoGroup from "./../../organisms/VideoGroup/VideoGroup"
import Video from "./../../molecules/Video/Video"

function LikedVideosPage() {
    const {authState} = useAuth();
    const {isUserLoggedIn} = authState;
    const { videoState} = useVideo();
        return (
        (isUserLoggedIn) ? 
        <div>
           <div className="liked">
            <ContentHeading fontSize="2rem">Liked Videos</ContentHeading>
            <div>
            <VideoGroup> 

            {videoState.likedVideos.map(({name, thumbnail, _id}) => 
            <div>
                <Video name={name} thumbnail={thumbnail} kind="small-video" redirect={`/watch/${_id}`}/>
            </div>)}
            </VideoGroup>
                
            </div>
            </div>
        </div> : ""
    )
}

export default LikedVideosPage
