import React from 'react'
import "./Categories.css"
import {data} from "../../../data/data"
import CardGroup from "./../CardGroup/CardGroup"
import CategoryCard from "../../molecules/CategoryCard/CategoryCard"
import ContentHeading from "./../../molecules/ContentHeading/ContentHeading"

function Categories() {
    return (
        <div>
            <ContentHeading>Categories</ContentHeading>
            <CardGroup>
            {data.categories.map(({name, thumbnail, tags, redirect}) => {
                return <CategoryCard name={name} thumbnail={thumbnail} redirect={redirect} tags={tags}/>
            })}
            </CardGroup>
        </div>
    )
}

export default Categories
