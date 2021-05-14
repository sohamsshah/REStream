import React from 'react'
import {useParams} from "react-router-dom"
import {data} from "./../../../data/data"
import {searchCreator} from "./../../../utils/category/category"
import Video from "./../../molecules/Video/Video"
import VideoGroup from "./../VideoGroup/VideoGroup"
import CategoryDetails from "./../CategoryDetails/CategoryDetails"
import Typography from "./../../atoms/Typography/Typography"
import "./Category.css"

function Category() {
    const { category } = useParams();
    const categoryVideos = data.videos.filter((item) => item.category_name === category);
    const {name, thumbnail, description, tags} = data.categories.filter((item) => item.category_name === category)[0];
    console.log(categoryVideos);
    return (
        <div>        
        <CategoryDetails name={name} thumbnail={thumbnail} description={description} tags={tags}/>
        <div>
        <Typography className="category__subheading" fontSize="xl" fontWeight="semibold">Videos</Typography>
        <VideoGroup>
            {categoryVideos.map(({name, creator_id, thumbnail, id, category}) => <Video category = {category} name={name} thumbnail={thumbnail} redirect={`/watch/${id}`} creator_details={searchCreator(data, creator_id)} />)}
        </VideoGroup>
        </div>
        </div>

    )
}

export default Category