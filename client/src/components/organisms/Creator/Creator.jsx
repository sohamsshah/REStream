import React, {useState, useEffect} from 'react'
import {useParams} from "react-router-dom"
import axios from 'axios'
import Video from "./../../molecules/Video/Video"
import VideoGroup from "./../VideoGroup/VideoGroup"
import CreatorDetails from "./../CreatorDetails/CreatorDetails"
import Typography from "./../../atoms/Typography/Typography"
import {useAuth} from "./../../../context/auth-context"
import {useVideo} from "./../../../context/video-context"
import {searchFollowings} from "./../../../utils/context-utils/context-utils"
import {followCreator, unfollowCreator} from "./../../../utils/api-calls/following" 
import Spinner from "./../../atoms/Spinner/Spinner"
import "./Creator.css"

function Creator({kind}) {
    const { id } = useParams();
    const [creatorVideos, setCreatorVideos] = useState(null);
    const [creatorDetails, setCreatorDetails] = useState(null)
    const {authState} = useAuth();
    const {currentUserId} = authState;
    const {videoState, dispatch} = useVideo();
    console.log(videoState);
    
    useEffect(() => {
        (async function () {
            try {
                // every channel is a creator with isChannel === true
                const response = await axios.get(`https://apirestream.sohamsshah.repl.co/creators/${id}`);
                
                if (response.status === 200) {
                    setCreatorDetails(response.data.creator);
                    setCreatorVideos(response.data.videos)
                }
            }
            catch (error) {
                console.log(error.message)
            }
        })()
    }, [id])
    function handleFollow(){
        if (currentUserId !== null && creatorDetails !== null){
            if(searchFollowings(videoState,creatorDetails._id) === false){
                followCreator(currentUserId, creatorDetails, dispatch);
                // dispatch({type : "FOLLOW", payload:{creator:creatorDetails, currentUserId:currentUserId}})
            } else {
                unfollowCreator(currentUserId, creatorDetails, dispatch);
                // dispatch({type : "UNFOLLOW", payload:{creator:creatorDetails, currentUserId:currentUserId}})
            }
        }
        
        else{
            alert("Please Login")
        } 
    }
    
    return (
        (creatorDetails !== null && creatorVideos) ?
        (<div>
        {
            (creatorDetails !== null) ? <CreatorDetails name={creatorDetails.name} description={creatorDetails.description} thumbnail={creatorDetails.thumbnail} handleFollow={handleFollow} isFollowing={(currentUserId !== null) ? searchFollowings(videoState,creatorDetails._id): false} currentUserId={currentUserId}/>: creatorDetails
        }
        
        <div>
        <Typography className="creator__subheading" fontSize="xl" fontWeight="semibold">Videos</Typography>
            <VideoGroup>
                {creatorVideos !== null ? creatorVideos.map(({name, creator_id, thumbnail, _id, category}) => <Video category = {category} name={name} thumbnail={thumbnail} redirect={`/watch/${_id}`}  />) : creatorVideos}
            </VideoGroup>
        </div>
        
        </div>) : <Spinner />
    )
}

export default Creator
