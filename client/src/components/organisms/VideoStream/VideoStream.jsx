import React, {useState, useEffect} from 'react'
import axios from 'axios'
import VideoEmbed from "./../../atoms/VideoEmbed/VideoEmbed"
import {useParams} from "react-router-dom"
import {useVideo} from "./../../../context/video-context"
import {useAuth} from "./../../../context/auth-context"
import {searchLikes, searchFollowings} from "./../../../utils/context-utils/context-utils"
import Typography from '../../atoms/Typography/Typography'
import {AiFillLike, AiOutlineLike} from "react-icons/ai"
import {RiPlayListAddFill} from "react-icons/ri"
import PlaylistModal from "./../PlaylistModal/PlaylistModal"
import Button from "./../../atoms/Button/Button"
import {likeVideo, dislikeVideo} from "./../../../utils/api-calls/like-video";
import {followCreator, unfollowCreator} from "./../../../utils/api-calls/following";
import {addToHistory} from "./../../../utils/api-calls/history";

import "./VideoStream.css"

function VideoStream() {
    const {id} = useParams()
    const [video, setVideo] = useState("Loading...");
    const [creatorDetails, setCreatorDetails] = useState("Loading...")
    const {authState} = useAuth();
    const {currentUserId} = authState;
    const { videoState, dispatch } = useVideo();
    const [showModal, setShowModal] = useState(false);
    console.log(videoState);

    useEffect(() => {
        (async function () {
            try {
                const response = await axios.get(`https://apirestream.sohamsshah.repl.co/watch/${id}`);
                if (response.status === 200) {
                    setVideo(response.data.video);
                    setCreatorDetails(response.data.video.creator_id);
                }
            }
            catch (error) {
                console.log(error.message)
            }
        })()
    }, [id])

    useEffect(() => {
        if(currentUserId !== null){
            if(video !== "Loading..." && video._id !== undefined){
                addToHistory(currentUserId, video, dispatch);
            }
        }
        
    }, [video]);

    async function handleLike (){
        if (currentUserId !== null && video !== "Loading..."){
        if(searchLikes(videoState,video._id) === false){
            likeVideo(currentUserId,video, dispatch);
              } else {
            dislikeVideo(currentUserId,video, dispatch);
            }
    }
    else{
        alert("Please Login")
    }
    }

    async function handleFollow(){
        if (currentUserId !== null && video !== "Loading..."){
            
            if(searchFollowings(videoState,creatorDetails._id) === false){
                followCreator(currentUserId, creatorDetails, dispatch);
            } else {
                unfollowCreator(currentUserId, creatorDetails, dispatch);
            }
        } 
        else{
            alert("Please Login")
        } 
    }
    function handlePlaylist(){
        if(currentUserId !== null){
            setShowModal(true)
        }else{
            alert("Please Login")
        }
    }
    return (
        
        
        <div className="video-stream">
            <div className="video-embed">
                <VideoEmbed width="100%" height="560" id={id} />
            </div>
            <div className="video-stream__info">
                <div className="info__title">
                    <Typography fontSize="ml" fontWeight="medium">{video.name}</Typography>
                </div>
                <div className="info__buttons">
                    <button
                        onClick = {handleLike}
                        className={(currentUserId !== null)?(searchLikes(videoState, video._id) ? "video-stream__like like__clicked" : "video-stream__like"):"video-stream__like"}
                    >
                        {(currentUserId !== null)?(searchLikes(videoState,video._id) ? <AiFillLike /> : <AiOutlineLike />):<AiOutlineLike />}
                    </button>
                    <button onClick={handlePlaylist}className="video-stream__playlist">
                    <RiPlayListAddFill />
                    </button>
                    <PlaylistModal video={video} showModal={showModal} setShowModal={setShowModal} />
                    
                </div>
                
            </div>
            <div className="creator-section">
                <div className="creator-info">
                <div className="creator-info__thumbnail">
                    <img alt={`${creatorDetails.name}`} src={creatorDetails.thumbnail} />
                </div>
                <div className="creator-info__name">
                    {creatorDetails.name}  
                </div>
                </div>
                <div> 
                <Button onClick={handleFollow}>
                {(currentUserId !== null)?(searchFollowings(videoState,creatorDetails._id) === false ? "Follow": "Following"):"Follow"}
                </Button>
                </div>
                
            </div>
            <div className="video-description">
                <div>
                {video.description}
                </div>
                
            </div>  
        </div>
    )
}

export default VideoStream
