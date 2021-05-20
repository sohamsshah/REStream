import React, {useEffect, useState} from 'react'
import {data} from "../../../data/data"
import axios from 'axios'
import CardGroup from "../CardGroup/CardGroup"
import CategoryCard from "../../molecules/CategoryCard/CategoryCard"
import ContentHeading from "../../molecules/ContentHeading/ContentHeading"

function Creator() {
    const [creators, setCreators] = useState("Loading...")
    useEffect(() => {
        (async function () {
            try {
                const response = await axios.get(`https://apirestream.sohamsshah.repl.co/creators/`);
                
                if (response.status === 200) {
                    setCreators(response.data.creators)
                }
            }
            catch (error) {
                console.log(error.message)
            }
        })()
    }, [])
    return (
            
        <div>
            <ContentHeading>Instructors</ContentHeading>
            <CardGroup>
                {creators !== "Loading..." ? creators.map(({name, thumbnail, redirect, creator_id, isChannel}) => {
                    if (!isChannel){
                    return <CategoryCard name={name} thumbnail={thumbnail} redirect={redirect+`${creator_id}`} />
                    }
                    return ""
                }) : creators}
            </CardGroup>
        </div>
        
    )
}

export default Creator
