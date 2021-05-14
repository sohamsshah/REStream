import React from 'react'
import "./CreatorDetails.css"
import Button from "./../../atoms/Button/Button"

function CreatorDetails({name, description, thumbnail, handleFollow, isFollowing, currentUserId,...props}) {
    return (
        <div className="creator-details" {...props}>
            <img alt={`${name}`} className="creator-details__img" src={thumbnail} />
            <div className="creator-details__info">
                <h1>{name}</h1>
                <div>{description}</div>
                <Button onClick={handleFollow}>
                {(currentUserId !== null)?(isFollowing === false ? "Follow": "Following"):"Follow"}</Button>
            </div>
        </div>
    )
}

export default CreatorDetails
