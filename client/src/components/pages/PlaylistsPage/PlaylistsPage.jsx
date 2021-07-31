import React from 'react'
import {useVideo} from "./../../../context/video-context"
import {useAuth} from "./../../../context/auth-context"
import ContentHeading from '../../molecules/ContentHeading/ContentHeading'
import VideoGroup from "./../../organisms/VideoGroup/VideoGroup"
import Video from "./../../molecules/Video/Video"
import "./PlaylistsPage.css"
import {Link} from "react-router-dom"

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
            {videoState.likedVideos.length === 0 ? <div className="liked-videos">
            Seems you haven't added any Videos to Playlists yet. Add some <span className="link-text"><Link to="/">videos</Link></span> to get started!
            </div> : 
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
            </div>}
            </div>
        </div>: <div className="playlists-page"></div>)
}

export default PlaylistsPage
