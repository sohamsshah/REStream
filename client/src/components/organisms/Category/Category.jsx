import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from "react-router-dom"
import { data } from "./../../../data/data"
import { searchCreator } from "./../../../utils/category/category"
import Video from "./../../molecules/Video/Video"
import VideoGroup from "./../VideoGroup/VideoGroup"
import CategoryDetails from "./../CategoryDetails/CategoryDetails"
import Typography from "./../../atoms/Typography/Typography"
import "./Category.css"

function Category() {
    const [categoryVideos, setCategoryVideos] = useState("Loading...")
    const [categoryDetails, setCategoryDetails] = useState("Loading...")
    const { category } = useParams();
    const {name, thumbnail, description, tags} = categoryDetails[0];

    useEffect(() => {
        (async function () {
            try {
                const response = await axios.get(`https://apirestream.sohamsshah.repl.co/categories/${category}`);
                if (response.status === 200) {
                    
                    setCategoryVideos(response.data.videos)
                    setCategoryDetails(response.data.category)
                }
            }
            catch (error) {

                console.log(error.message)
            }
        })()
    }, [])
    return (
        <div>
            {
                (categoryDetails !== "Loading...") ? <CategoryDetails name={name} thumbnail={thumbnail} description={description} tags={tags} /> :categoryDetails
            }
            
            <div>
                <Typography className="category__subheading" fontSize="xl" fontWeight="semibold">Videos</Typography>


                <VideoGroup>
                    {categoryVideos !== "Loading..." ? categoryVideos.map(({ name, creator_id, thumbnail, _id, category_name }) => <Video category={category_name} name={name} thumbnail={thumbnail} redirect={`/watch/${_id}`} creator_details={searchCreator(data, creator_id)} />) : categoryVideos
                    }
                </VideoGroup>
            </div>
        </div>

    )
}

export default Category