import React from 'react'
import {useVideo} from "./../../../context/video-context"
import {useAuth} from "./../../../context/auth-context"
import ContentHeading from '../../molecules/ContentHeading/ContentHeading'
import VideoGroup from "./../../organisms/VideoGroup/VideoGroup"
import Video from "./../../molecules/Video/Video"

function LikedVideosPage() {
    const {authState} = useAuth();
    const {currentUserId, isUserLoggedIn} = authState;
    const { videoState} = useVideo();
    const currUserVideoState = videoState.filter((item) => item.id === currentUserId)[0];
    console.log(currUserVideoState);
    return (
        (isUserLoggedIn) ? 
        <div>
           <div className="liked">
            <ContentHeading fontSize="2rem">Liked Videos</ContentHeading>
            <div>
            <VideoGroup> 
                {console.log(currUserVideoState.likedVideos)}
            {currUserVideoState.likedVideos.map(({name, thumbnail, id}) => 
            <div>
                <Video name={name} thumbnail={thumbnail} kind="small-video" redirect={`/watch/${id}`}/>
            </div>)}
            </VideoGroup>
                
            </div>
            </div>
        </div> : ""
    )
}

export default LikedVideosPage
