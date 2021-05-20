import React, {useState, useEffect} from 'react'
import {useParams} from "react-router-dom"
import axios from 'axios'
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
    const [creatorVideos, setCreatorVideos] = useState("Loading...");
    const [creatorDetails, setCreatorDetails] = useState("Loading...")
    const {authState} = useAuth();
    const {currentUserId} = authState;
    const {videoState, dispatch} = useVideo();
    const currUserVideoState = videoState.filter((item) => item.id === currentUserId)[0];
    
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
    }, [])
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
        {
            (creatorDetails !== "Loading...") ? <CreatorDetails name={creatorDetails.name} description={creatorDetails.description} thumbnail={creatorDetails.thumbnail} handleFollow={handleFollow} isFollowing={(currentUserId !== null) ? searchFollowings(currUserVideoState,creatorDetails.creator_id): false} currentUserId={currentUserId}/>: creatorDetails
        }
        
        <div>
        <Typography className="creator__subheading" fontSize="xl" fontWeight="semibold">Videos</Typography>
            <VideoGroup>
                {creatorVideos !== "Loading..." ? creatorVideos.map(({name, creator_id, thumbnail, _id, category}) => <Video category = {category} name={name} thumbnail={thumbnail} redirect={`/watch/${_id}`}  />) : creatorVideos}
            </VideoGroup>
        </div>
        
        </div>
    )
}

export default Creator
