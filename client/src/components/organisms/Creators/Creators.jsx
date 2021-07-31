import React, {useEffect, useState} from 'react'
import axios from 'axios'
import CardGroup from "../CardGroup/CardGroup"
import CategoryCard from "../../molecules/CategoryCard/CategoryCard"
import ContentHeading from "../../molecules/ContentHeading/ContentHeading"
import Spinner from "./../../atoms/Spinner/Spinner"

function Creator() {
    const [creators, setCreators] = useState(null)
    useEffect(() => {
        (async function () {
            try {
                const response = await axios.get(`https://apirestream.sohamsshah.repl.co/creators/`);
                console.log(response);
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
                {creators !== null ? creators.map(({name, thumbnail, redirect, _id, isChannel}) => {
                    if (!isChannel){
                    return <CategoryCard name={name} thumbnail={thumbnail} redirect={redirect+`${_id}`} />
                    }
                    return ""
                }) : <Spinner />}
            </CardGroup>
        </div>
        
    )
}

export default Creator
