import React from 'react'
import "./FollowingPage.css"
import {useVideo} from "./../../../context/video-context"
import {useAuth} from "./../../../context/auth-context"
import ContentHeading from '../../molecules/ContentHeading/ContentHeading'
import CardGroup from "./../../organisms/CardGroup/CardGroup"
import CategoryCard from "./../../molecules/CategoryCard/CategoryCard"
import Typography from '../../atoms/Typography/Typography'
import {Link} from "react-router-dom"


function FollowingPage() {
    const {authState} = useAuth();
    const {currentUserId} = authState;
    const { videoState} = useVideo();
    console.log(videoState);
    // const currUserVideoState = videoState.filter((item) => item.id === currentUserId)[0];
    return (
        (currentUserId !== null) ?
            <div className="following">
            <ContentHeading fontSize="2rem">Following</ContentHeading>
            <div className="following__channels">
            <Typography className="following__heading" fontSize="ml" fontWeight="semibold">
                Channels You Follow
            </Typography>
                {(videoState.following.filter(({isChannel}) => isChannel).length) ? 
                <CardGroup>
                    {
                        
                    videoState.following.map(({name, thumbnail, redirect, creator_id, isChannel}) => {
                        if (isChannel){
                        return <CategoryCard name={name} thumbnail={thumbnail} redirect={redirect+`${creator_id}`} />
                        }
                        return ""
                    })}
                </CardGroup> : <div>
                    Seems you haven't followed any Channels yet. Follow some <Link to="/channels">Channels</Link> to get started!
                </div>
                }
            </div>
            <div className="following__creators">
            <Typography className="following__heading" fontSize="ml" fontWeight="semibold">
                Creators You Follow
            </Typography>
            {(videoState.following.filter(({isChannel}) => !isChannel).length) ? 
                <CardGroup>
                    {videoState.following.map(({name, thumbnail, redirect, creator_id, isChannel}) => {
                        if (!isChannel){
                        return <CategoryCard name={name} thumbnail={thumbnail} redirect={redirect+`${creator_id}`} />
                        }
                        return ""
                    })}
                </CardGroup> : 
                <div>
                    Seems you haven't followed any Instructors yet. Follow some <Link to="/instructors">Instructors</Link> to get started!
                </div>
                }
            </div>
            </div>: 
            <div></div>
        
    )
}

export default FollowingPage
