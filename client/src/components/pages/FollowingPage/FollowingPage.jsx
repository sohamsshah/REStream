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
    const {isUserLoggedIn} = authState;
    const { videoState} = useVideo();
    console.log(videoState);
        return (
        (isUserLoggedIn) ?
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
                    Seems you haven't followed any Channels yet. Follow some <span className="link-text"><Link to="/channels">Channels</Link></span> to get started!
                </div>
                }
            </div>
            <div className="following__creators">
            <Typography className="following__heading" fontSize="ml" fontWeight="semibold">
                Instructors You Follow
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
                    Seems you haven't followed any Instructors yet. Follow some <span className="link-text"><Link to="/instructors">Instructors</Link></span> to get started!
                </div>
                }
            </div>
            </div>: 
            <div className="following">
                Please Login
            </div>
        
    )
}

export default FollowingPage
