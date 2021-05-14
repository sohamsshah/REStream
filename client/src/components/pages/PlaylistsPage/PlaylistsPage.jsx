import React from 'react'
import {useVideo} from "./../../../context/video-context"
import {useAuth} from "./../../../context/auth-context"
import ContentHeading from '../../molecules/ContentHeading/ContentHeading'
import VideoGroup from "./../../organisms/VideoGroup/VideoGroup"
import Video from "./../../molecules/Video/Video"
import {data} from "./../../../data/data"
import {fetchVideoDetails} from './../../../utils/video/video'

function PlaylistsPage() {
    const {authState} = useAuth();
    const {currentUserId, isUserLoggedIn} = authState;
    const { videoState} = useVideo();
    const currUserVideoState = videoState.filter((item) => item.id === currentUserId)[0];
    console.log(currUserVideoState);
    return (
        (isUserLoggedIn) ? 
        <div>
             <div className="playlists-page">

            <ContentHeading fontSize="2rem">Your Playlists</ContentHeading>
            <div className="playlists-page__list">
                {
                    currUserVideoState.playlists.map((playlist) => {
                        return <div>
                        <h1> {playlist.name}</h1>
                        <VideoGroup>
                            {playlist.videos.map((id) => {
                                console.log(data, id);
                                const {name, thumbnail} = fetchVideoDetails(data, id);
                                return <Video kind="small-video" name={name} thumbnail={thumbnail} redirect={`/watch/${id}`} />
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
