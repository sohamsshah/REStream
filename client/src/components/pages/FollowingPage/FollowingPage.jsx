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
        return (
        (currentUserId !== null) ?
            <div className="following">
            <ContentHeading fontSize="2rem">Following</ContentHeading>
            <div className="following__channels">
            <Typography className="following__heading" fontSize="ml" fontWeight="semibold">
                Channels You Follow
            </Typography>
                {(videoState.following.filter(({creatorId}) => creatorId.isChannel).length) ? 
                <CardGroup>
                    {
                        
                    videoState.following.map(({creatorId}) => {
                        if (creatorId.isChannel){
                        return <CategoryCard name={creatorId.name} thumbnail={creatorId.thumbnail} redirect={creatorId.redirect+`${creatorId._id}`} />
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
            {(videoState.following.filter(({creatorId}) => !creatorId.isChannel).length) ? 
                <CardGroup>
                    {
                        
                    videoState.following.map(({creatorId}) => {
                        if (!creatorId.isChannel){
                        return <CategoryCard name={creatorId.name} thumbnail={creatorId.thumbnail} redirect={creatorId.redirect+`${creatorId._id}`} />
                        }
                        return ""
                    })}
                </CardGroup> : <div>
                    Seems you haven't followed any Channels yet. Follow some <Link to="/channels">Channels</Link> to get started!
                </div>
                }
            </div>
            </div>: 
            <div></div>
        
    )
}

export default FollowingPage
