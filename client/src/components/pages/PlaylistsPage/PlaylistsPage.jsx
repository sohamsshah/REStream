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
                            {playlist.videos.map((_id) => {
                                console.log(videoState);
                                
                                const {name, thumbnail} = fetchVideoDetails(data, _id);
                                return <Video kind="small-video" name={name} thumbnail={thumbnail} redirect={`/watch/${_id}`} />
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
