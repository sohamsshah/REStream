import React from 'react'
import {useVideo} from "./../../../context/video-context"
import {useAuth} from "./../../../context/auth-context"
import ContentHeading from '../../molecules/ContentHeading/ContentHeading'
import VideoGroup from "./../../organisms/VideoGroup/VideoGroup"
import Video from "./../../molecules/Video/Video"

function PlaylistsPage() {
    const {authState} = useAuth();
    const {isUserLoggedIn} = authState;
    const { videoState} = useVideo();
    console.log(videoState);
    return (
        (isUserLoggedIn) ? 
        <div>
             <div className="playlists-page">

            <ContentHeading fontSize="2rem">Your Playlists</ContentHeading>
            <div className="playlists-page__list">
                {
                    videoState.playlists.map((playlist) => {
                        return <div>
                        <h1> {playlist.name}</h1>
                        <VideoGroup>
                            {playlist.videos.map(({videoId}) => {
                                return <Video kind="small-video" name={videoId.name} thumbnail={videoId.thumbnail} redirect={`/watch/${videoId._id}`} />
                            })}
                        </VideoGroup>
                        </div>
                    })
                }
            </div>
            </div>
        </div>: "")
}

export default PlaylistsPage
