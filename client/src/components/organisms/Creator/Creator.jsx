import React from 'react'
import {useParams} from "react-router-dom"
import {data} from "./../../../data/data"
import Video from "./../../molecules/Video/Video"
import {searchCreator} from "./../../../utils/category/category" 
import VideoGroup from "./../VideoGroup/VideoGroup"
import CreatorDetails from "./../CreatorDetails/CreatorDetails"
import Typography from "./../../atoms/Typography/Typography"
import {useAuth} from "./../../../context/auth-context"
import {useVideo} from "./../../../context/video-context"
import {searchFollowings} from "./../../../utils/context-utils/context-utils"
import "./Creator.css"

function Creator({kind}) {
    const { id } = useParams();
    const {authState} = useAuth();
    const {currentUserId} = authState;
    const creatorVideos = data.videos.filter((item) => item.creator_id === id);
    const creatorDetails = searchCreator(data, id)[0];
    const {videoState, dispatch} = useVideo();
    const currUserVideoState = videoState.filter((item) => item.id === currentUserId)[0];

    function handleFollow(){
        if (currentUserId !== null){
            console.log(videoState);
            if(searchFollowings(currUserVideoState,creatorDetails.creator_id) === false){
                dispatch({type : "FOLLOW", payload:{creator:creatorDetails, currentUserId:currentUserId}})
            } else {
                dispatch({type : "UNFOLLOW", payload:{creator:creatorDetails, currentUserId:currentUserId}})
            }
        }
        
        else{
            alert("Please Login")
        } 
    }
    
    return (
        <div>
        
        <CreatorDetails name={creatorDetails.name} description={creatorDetails.description} thumbnail={creatorDetails.thumbnail} handleFollow={handleFollow} isFollowing={(currentUserId !== null) ? searchFollowings(currUserVideoState,creatorDetails.creator_id): false} currentUserId={currentUserId}/>
        <div>
        <Typography className="creator__subheading" fontSize="xl" fontWeight="semibold">Videos</Typography>
            <VideoGroup>
                {creatorVideos.map(({name, creator_id, thumbnail, id, category}) => <Video category = {category} name={name} thumbnail={thumbnail} redirect={`/watch/${id}`} creator_details={searchCreator(data, creator_id)} />)}
            </VideoGroup>
        </div>
        
        </div>
    )
}

export default Creator
