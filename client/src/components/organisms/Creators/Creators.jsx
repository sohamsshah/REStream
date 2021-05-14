import React from 'react'
import {data} from "../../../data/data"
import CardGroup from "../CardGroup/CardGroup"
import CategoryCard from "../../molecules/CategoryCard/CategoryCard"
import ContentHeading from "../../molecules/ContentHeading/ContentHeading"

function Creator() {
    return (
            
        <div>
            <ContentHeading>Instructors</ContentHeading>
            <CardGroup>
                {data.creators.map(({name, thumbnail, redirect, creator_id, isChannel}) => {
                    if (!isChannel){
                    return <CategoryCard name={name} thumbnail={thumbnail} redirect={redirect+`${creator_id}`} />
                    }
                    return ""
                })}
            </CardGroup>
        </div>
        
    )
}

export default Creator
