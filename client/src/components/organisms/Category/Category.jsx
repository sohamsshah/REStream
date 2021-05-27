import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from "react-router-dom"
import Video from "./../../molecules/Video/Video"
import VideoGroup from "./../VideoGroup/VideoGroup"
import CategoryDetails from "./../CategoryDetails/CategoryDetails"
import Typography from "./../../atoms/Typography/Typography"
import "./Category.css"
import Spinner from "./../../atoms/Spinner/Spinner"

function Category() {
    const [categoryVideos, setCategoryVideos] = useState(null)
    const [categoryDetails, setCategoryDetails] = useState(null)
    const { category } = useParams();
    

    useEffect(() => {
        (async function () {
            try {
                const response = await axios.get(`https://apirestream.sohamsshah.repl.co/categories/${category}`);
                if (response.status === 200) {
                    
                    setCategoryVideos(response.data.videos)
                setCategoryDetails(response.data.category[0])
                }
            }
            catch (error) {
                console.log(error.message)
            }
        })()
    }, [category])
    return (
        (categoryDetails !== null && categoryVideos !== null) ?
        (<div>
            {
                (categoryDetails !== null) ? <CategoryDetails name={categoryDetails.name} thumbnail={categoryDetails.thumbnail} description={categoryDetails.description} tags={categoryDetails.tags} /> :categoryDetails
            }
            
            <div>
                <Typography className="category__subheading" fontSize="xl" fontWeight="semibold">Videos</Typography>


                <VideoGroup>
                    {categoryVideos !== null ? categoryVideos.map(({ name, creator_id, thumbnail, _id, category_name }) => <Video category={category_name} name={name} thumbnail={thumbnail} redirect={`/watch/${_id}`} />) : categoryVideos
                    }
                </VideoGroup>
            </div>
        </div>
) : <Spinner />
    )
}

export default Category